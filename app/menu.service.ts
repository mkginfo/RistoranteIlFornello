import {Menu} from "./menu";
export class MenuService {

  getDate() {
    let Menu: Menu[] = [
      {
        type: 'SALADS', 
        name: 'Insalata Cesare', 
        details: 'crispy romaine, creamy caesar dressing, parmesan, croutons', 
        halfPrice: '$7.50', 
        fullPrice: '$12.15'
      },
      {
        type: 'SALADS',
        name: 'Insalata Cesare',
        details: 'crispy romaine, creamy caesar dressing, parmesan, croutons',
        halfPrice: '$7.50',
        fullPrice: '$12.15'
      }, {
        type: 'SALADS',
        name: 'Mista Salad',
        details: 'mixed greens, tomatoes, cucumber balsamic vinaigrette',
        halfPrice: '$7.0',
        fullPrice: '$11.00'
      }, {
        type: 'PASTA',
        name: 'Linguini di Mare',
        details: 'shrimp, sea scallops, calamari in tomato sauce',
        halfPrice: 'N/A',
        fullPrice: '$20.95'
      }, {
        type: 'PASTA',
        name: 'Lasagna',
        details: 'layered with bolognese sauce, mozzarella, béchamel, tomato sauce',
        halfPrice: 'N/A',
        fullPrice: '$17.95'
      }, {
        type: 'PIZZA',
        name: 'Pizza Carne',
        details: 'tomato sauce, mozzarella, bacon, sausage, pepperoni, green pepper',
        halfPrice: 'N/A',
        fullPrice: '$15.25'
      }, {
        type: 'PIZZA',
        name: 'Prosciutto Pizza',
        details: 'Tomato sauce, mozzarella, prosciutto, shaved parmagiana, dressed arugula',
        halfPrice: '-',
        fullPrice: '$15.25'
      }

    ];
    return Menu
  }
}