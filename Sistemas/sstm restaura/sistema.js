const LS_KEY = 'rest_pedidos_v1';
const LS_CASH_KEY = 'rest_caixa_fechado_v1';

const btn = document.getElementById('btnContato');
btn.addEventListener('click', () => {
    alert("Whatsapp 🤙 : (11) 97693-9285\nEmail 📧 : quintaldocabral@gmail.com\nInstagram : @quintaldocabral");
});

let orders = [];
let currentItems = [];
let editingOrderId = null;
let closedDays = [];

// ELEMENTOS
const inpTable = document.getElementById('inpTable');
const inpItem = document.getElementById('inpItem');
const inpQty = document.getElementById('inpQty');
const inpPreco = document.getElementById('inpPreco');
const inpNotes = document.getElementById('inpNotes');

const btnAddItem = document.getElementById('btnAddItem');
const btnSubmit = document.getElementById('btnSubmit');
const btnClear = document.getElementById('btnClear');

const currentItemsEl = document.getElementById('currentItems');
const totalPriceEl = document.getElementById('totalPrice');

const ordersList = document.getElementById('ordersList');
const filterStatus = document.getElementById('filterStatus');
const searchBox = document.getElementById('searchBox');

const totalCount = document.getElementById('totalCount');
const countNew = document.getElementById('countNew');
const countReady = document.getElementById('countReady');
const countDone = document.getElementById('countDone');

const totalDayEl = document.getElementById('totalDay');
const btnCloseDay = document.getElementById('btnCloseDay');
const closedDaysList = document.getElementById('closedDaysList');

const btnClearAll = document.getElementById('btnClearAll');
const btnExport = document.getElementById('btnExport');
const btnImport = document.getElementById('btnImport');
const fileInput = document.getElementById('fileInput');

// INIT
load();
render();

// EVENTOS
btnAddItem.onclick = addCurrentItem;
btnSubmit.onclick = submitOrUpdateOrder;
btnClear.onclick = clearForm;
filterStatus.onchange = render;
searchBox.oninput = render;
btnClearAll.onclick = clearAll;
btnExport.onclick = exportJSON;
btnImport.onclick = () => fileInput.click();
fileInput.onchange = importJSON;
btnCloseDay.onclick = fecharCaixa;

// FUNÇÕES
function addCurrentItem() {
    const name = inpItem.value.trim();
    const qty = parseInt(inpQty.value) || 1;
    const price = parseFloat(inpPreco.value.replace(',', '.'));

    if (!name || isNaN(price) || price <= 0) {
        alert('Item ou preço inválido');
        return;
    }

    currentItems.push({ name, qty, price });
    inpItem.value = '';
    inpQty.value = 1;
    inpPreco.value = '';
    renderCurrentItems();
}

function renderCurrentItems() {
    currentItemsEl.innerHTML = '';
    currentItems.forEach((it, i) => {
        currentItemsEl.innerHTML += `
            <div class="item-pill">
                ${escapeHtml(it.name)} x${it.qty} — R$ ${(it.qty * it.price).toFixed(2)}
                <button onclick="removeItem(${i})">Rem</button>
            </div>
        `;
    });
    updateTotal();
}

function removeItem(i) {
    currentItems.splice(i, 1);
    renderCurrentItems();
}

function updateTotal() {
    const total = currentItems.reduce((s, it) => s + it.qty * it.price, 0);
    totalPriceEl.textContent = total.toFixed(2);
}

function submitOrUpdateOrder() {
    if (currentItems.length === 0) return alert('Sem itens');

    const total = currentItems.reduce((s, it) => s + it.qty * it.price, 0);

    if (editingOrderId) {
        const o = orders.find(x => x.id === editingOrderId);
        if (!o) return;

        o.table = inpTable.value || 'Sem identificação';
        o.items = [...currentItems];
        o.notes = inpNotes.value;
        o.total = total;

        editingOrderId = null;
        btnSubmit.textContent = 'Registrar Pedido';
    } else {
        orders.unshift({
            id: Date.now(),
            table: inpTable.value || 'Sem identificação',
            items: [...currentItems],
            notes: inpNotes.value,
            total,
            time: new Date().toISOString(),
            status: 'new'
        });
    }

    save();
    clearForm();
    render();
}

function editOrder(id) {
    const o = orders.find(x => x.id === id);
    if (!o) return;

    editingOrderId = id;
    inpTable.value = o.table;
    inpNotes.value = o.notes;
    currentItems = [...o.items];

    btnSubmit.textContent = 'Atualizar Pedido';
    renderCurrentItems();
}

function clearForm() {
    inpTable.value = '';
    inpNotes.value = '';
    currentItems = [];
    editingOrderId = null;
    btnSubmit.textContent = 'Registrar Pedido';
    renderCurrentItems();
}

function render() {
    ordersList.innerHTML = '';
    let nNew = 0, nReady = 0, nDone = 0;

    orders.forEach(o => {
        if (o.status === 'new') nNew++;
        else if (o.status === 'ready') nReady++;
        else nDone++;

        ordersList.innerHTML += `
            <div class="card">
                <strong>${escapeHtml(o.table)}</strong><br>
                ${o.items.map(it => `${escapeHtml(it.name)} x${it.qty}`).join('<br>')}
                <div><strong>Total: R$ ${o.total.toFixed(2)}</strong></div>
                <button onclick="toggleStatus(${o.id})">Status</button>
                <button onclick="editOrder(${o.id})">Editar</button>
                <button onclick="removeOrder(${o.id})">Excluir</button>
            </div>
        `;
    });

    totalCount.textContent = orders.length;
    countNew.textContent = nNew;
    countReady.textContent = nReady;
    countDone.textContent = nDone;

    totalDayEl.textContent = calcularTotalDoDia().toFixed(2);
    renderClosedDays();
}

function toggleStatus(id) {
    const o = orders.find(x => x.id === id);
    if (!o) return;
    o.status = o.status === 'new' ? 'ready' : o.status === 'ready' ? 'done' : 'new';
    save(); render();
}

function calcularTotalDoDia() {
    const hoje = new Date().toISOString().slice(0, 10);
    return orders
        .filter(o => o.status === 'done' && o.time.slice(0, 10) === hoje)
        .reduce((s, o) => s + o.total, 0);
}

function fecharCaixa() {
    const hoje = new Date().toISOString().slice(0, 10);
    const total = calcularTotalDoDia();

    if (total === 0) {
        alert('Nenhum valor para fechar hoje.');
        return;
    }

    if (!confirm(`Fechar o dia ${hoje} com R$ ${total.toFixed(2)}?`)) return;

    closedDays.unshift({
        date: hoje,
        total,
        pedidos: orders.filter(o => o.status === 'done').length,
        fechadoEm: new Date().toISOString()
    });

    orders = orders.filter(o => o.status !== 'done');
    save();
    saveCash();
    render();
}

function renderClosedDays() {
    if (!closedDaysList) return;

    if (!closedDays.length) {
        closedDaysList.innerHTML = 'Nenhum caixa fechado ainda.';
        return;
    }

    closedDaysList.innerHTML = closedDays.map(c => `
        <div style="margin-bottom:8px">
            📅 <strong>${c.date}</strong><br>
            💰 R$ ${c.total.toFixed(2)}<br>
            🧾 ${c.pedidos} pedidos
        </div>
    `).join('');
}

function removeOrder(id) {
    orders = orders.filter(o => o.id !== id);
    save(); render();
}

function clearAll() {
    if (confirm('Apagar tudo?')) {
        orders = []; save(); render();
    }
}

function save() { localStorage.setItem(LS_KEY, JSON.stringify(orders)); }
function saveCash() { localStorage.setItem(LS_CASH_KEY, JSON.stringify(closedDays)); }

function load() {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) orders = JSON.parse(raw);

    const rawCash = localStorage.getItem(LS_CASH_KEY);
    if (rawCash) closedDays = JSON.parse(rawCash);
}

function exportJSON() {
    const blob = new Blob([JSON.stringify(orders, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'pedidos.json';
    a.click();
}

function importJSON(e) {
    const f = e.target.files[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => { orders = JSON.parse(r.result); save(); render(); };
    r.readAsText(f);
}

function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, m => (
        { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]
    ));
}
