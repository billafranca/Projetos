const LS_KEY = 'rest_pedidos_v1';

let orders = [];
let currentItems = [];

// elementos
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

const btnClearAll = document.getElementById('btnClearAll');
const btnExport = document.getElementById('btnExport');
const btnImport = document.getElementById('btnImport');
const fileInput = document.getElementById('fileInput');

// init
load();
render();

// eventos
btnAddItem.onclick = addCurrentItem;
btnSubmit.onclick = submitOrder;
btnClear.onclick = clearForm;
filterStatus.onchange = render;
searchBox.oninput = render;
btnClearAll.onclick = () => {
    if (confirm('Apagar todos os pedidos?')) {
        orders = [];
        save();
        render();
    }
};
btnExport.onclick = exportJSON;
btnImport.onclick = () => fileInput.click();
fileInput.onchange = importJSON;

// funções
function addCurrentItem(){
    const name = inpItem.value.trim();
    const qty = parseInt(inpQty.value) || 1;
    const price = parseFloat(inpPreco.value.replace(',', '.'));

    if(!name || isNaN(price) || price <= 0){
        alert('Item ou preço inválido');
        return;
    }

    const found = currentItems.find(
        it => it.name.toLowerCase() === name.toLowerCase() && it.price === price
    );

    if(found){
        found.qty += qty;
    } else {
        currentItems.push({ name, qty, price });
    }

    inpItem.value = '';
    inpQty.value = 1;
    inpPreco.value = '';
    renderCurrentItems();
}

function renderCurrentItems(){
    currentItemsEl.innerHTML = '';

    currentItems.forEach((it, idx)=>{
        const div = document.createElement('div');
        div.className = 'item-pill';
        div.innerHTML = `
            ${escapeHtml(it.name)} x${it.qty} — R$ ${(it.qty * it.price).toFixed(2)}
            <button class="ghost" data-idx="${idx}">Rem</button>
        `;
        currentItemsEl.appendChild(div);
    });

    [...currentItemsEl.querySelectorAll('button')].forEach(btn=>{
        btn.onclick = () => {
            currentItems.splice(btn.dataset.idx, 1);
            renderCurrentItems();
        };
    });

    updateTotal();
}

function updateTotal(){
    const total = currentItems.reduce(
        (sum, it) => sum + it.qty * it.price, 0
    );
    totalPriceEl.textContent = total.toFixed(2);
}

function submitOrder(){
    if(currentItems.length === 0){
        alert('Adicione itens');
        return;
    }

    const total = currentItems.reduce(
        (sum, it) => sum + it.qty * it.price, 0
    );

    orders.unshift({
        id: Date.now(),
        table: inpTable.value || 'Sem identificação',
        items: currentItems.map(it => ({ ...it })),
        notes: inpNotes.value,
        total,
        time: new Date().toISOString(),
        status: 'new'
    });

    save();
    clearForm();
    render();
}

function clearForm(){
    inpTable.value = '';
    inpItem.value = '';
    inpQty.value = 1;
    inpPreco.value = '';
    inpNotes.value = '';
    currentItems = [];
    renderCurrentItems();
}

function render(){
    ordersList.innerHTML = '';
    let nNew=0, nReady=0, nDone=0;

    orders.forEach(o=>{
        if(o.status === 'new') nNew++;
        else if(o.status === 'ready') nReady++;
        else nDone++;

        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <strong>${escapeHtml(o.table)}</strong><br>
            ${o.items.map(it =>
                `${escapeHtml(it.name)} x${it.qty} — R$ ${(it.qty * it.price).toFixed(2)}`
            ).join('<br>')}
            <div><strong>Total: R$ ${o.total.toFixed(2)}</strong></div>
            <button onclick="toggleStatus(${o.id})">Status</button>
            <button onclick="removeOrder(${o.id})">Excluir</button>
        `;
        ordersList.appendChild(div);
    });

    totalCount.textContent = orders.length;
    countNew.textContent = nNew;
    countReady.textContent = nReady;
    countDone.textContent = nDone;
}

function toggleStatus(id){
    const o = orders.find(x => x.id === id);
    if(!o) return;
    o.status = o.status === 'new' ? 'ready' : o.status === 'ready' ? 'done' : 'new';
    save();
    render();
}

function removeOrder(id){
    if(confirm('Excluir pedido?')){
        orders = orders.filter(o => o.id !== id);
        save();
        render();
    }
}

function save(){
    localStorage.setItem(LS_KEY, JSON.stringify(orders));
}

function load(){
    const raw = localStorage.getItem(LS_KEY);
    if(raw) orders = JSON.parse(raw);
}

function exportJSON(){
    const blob = new Blob([JSON.stringify(orders, null, 2)], {type:'application/json'});
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'pedidos.json';
    a.click();
}

function importJSON(e){
    const file = e.target.files[0];
    if(!file) return;
    const reader = new FileReader();
    reader.onload = () => {
        orders = JSON.parse(reader.result);
        save();
        render();
    };
    reader.readAsText(file);
}

function escapeHtml(s){
    return String(s).replace(/[&<>"']/g, m =>
        ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m])
    );
}
