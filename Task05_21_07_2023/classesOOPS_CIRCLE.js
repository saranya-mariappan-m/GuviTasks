/**
 * Task file to understand all OOPS Concepts of Classes, Objects & Properties.
 */

class Circle{
 value = 1;
 radius = this.value.toFixed(1);
 color = 'red';

 circle(){
  console.log('With No param circle method.');
 }
 circle(radius){
    console.log(radius, 'With param circle method.');
   }
 circle(radius, color){
   console.log('Radius:',radius, ' of Circle with color:',color);
 }
 getRadius(){
    console.log('simple Get Radius method');
    return {radius:this.radius}
   }
   setRadius(val){
    this.radius = val;
    console.log(this.radius);
   }
   getColor(){
    console.log('simple Get color method');
    return {color:this.color}
   }
   setColor(val){
    this.color = val;
    console.log('simple Set color method',this.color);
   }
   toString(radius,color){
    let newString = [];
    newString['radius'] = radius;
    newString['color'] = color;
    return newString;
   }
   getArea(radius){
    return 3.17*radius*radius;
   }
   getCircumference(radius){
    return 2*3.17*radius;
   }

}
const calculateRadius = new Circle();
calculateRadius.circle(5);
calculateRadius.circle(5);
calculateRadius.circle(5,'green');
calculateRadius.getRadius();
calculateRadius.setRadius(10);
calculateRadius.getColor();
calculateRadius.setColor('blue');
console.log('toString',calculateRadius.toString(3,'yellow'));
console.log('Area',calculateRadius.getArea(5));
console.log('Cirumference',calculateRadius.getCircumference(5));