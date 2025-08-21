public class Main{
	public static void main(String[] args){
	Aluno al1 = new Aluno();
	al1.nome = "josias delgas";
	al1.cpf = "1234567890";
	al1.rg = "1234567890";
	al1.endereco = "rua da rua n-55";
	al1.media = 9;
	al1.add();

	System.out.println(al1.nome);
	System.out.println(al1.cpf);
	System.out.println(al1.rg); 
	System.out.println(al1.endereco);
	System.out.println(al1.media);

	Aluno al2 = new Aluno();
	al2.nome = "maria da silva";
	al2.cpf = "12648486";
	al2.rg = "1234567890";
	al2.endereco = "rua da rua n-65";
	al2.media = 4;
	al2.add();

	Aluno al3 = new Aluno();
	al3.nome = "mario gomes";
	al3.cpf = "199933252";
	al3.rg = "1235590";
	al3.endereco = "rua da rua n-88";
	al3.media = 4;
	al3.add();

	System.out.println(al2.nome);
	System.out.println(al2.cpf);
	System.out.println(al2.rg); 
	System.out.println(al2.endereco);
	System.out.println(al2.media);

	System.out.println("Total de alunos: " + Aluno.nAls);
}
}
	 