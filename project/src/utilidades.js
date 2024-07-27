export const catalogo = [{
    id: '1',
    nomeProduto: "Perfume Masculino",
    marca: "Dior",
    preco: 70,
    imagem: "p1.png",
    masculino: true
},
{
    id: '2',
    nomeProduto: "Perfume Feminino",
    marca: "Dior",
    preco: 110,
    imagem: "p1f.png",
    feminino: true
},
{
    id: '3',
    nomeProduto: "Perfume Feminino2",
    marca: "Dior",
    preco: 110,
    imagem: "p2f.png",
    feminino: true
},
{
    id: '4',
    nomeProduto: "Perfume Feminino3",
    marca: "Dior",
    preco: 110,
    imagem: "p3f.png",
    feminino: true
},
{
    id: '5',
    nomeProduto: "Perfume Feminino4",
    marca: "Dior",
    preco: 110,
    imagem: "p4f.png",
    feminino: true
},
{
    id: '6',
    nomeProduto: "Perfume Feminino5",
    marca: "Dior",
    preco: 110,
    imagem: "p5f.png",
    feminino: true
},
{
    id: '7',
    nomeProduto: "Perfume Feminino6",
    marca: "Dior",
    preco: 110,
    imagem: "p6f.png",
    feminino: true
},
{
    id: '8',
    nomeProduto: "Perfume Masculino2",
    marca: "Dior",
    preco: 70,
    imagem: "p2m.png",
    feminino: true
},
{
    id: '9',
    nomeProduto: "Perfume Masculino3",
    marca: "Dior",
    preco: 70,
    imagem: "p3m.png",
    masculino: true
},
{
    id: '10',
    nomeProduto: "Perfume Masculino4",
    marca: "Dior",
    preco: 70,
    imagem: "p4m.png",
    masculino: true
},
{
    id: '11',
    nomeProduto: "Perfume Masculino5",
    marca: "Dior",
    preco: 70,
    imagem: "p5m.png",
    masculino: true
},
{
    id: '12',
    nomeProduto: "Perfume Masculino6",
    marca: "Dior",
    preco: 70,
    imagem: "p6m.png",
    masculino: true
},
];

export function SalvarLocalStorage(chave, informacao) {
    localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave, informacao) {
    return JSON.parse(localStorage.getItem(chave));
}