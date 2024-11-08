{
    //
    // Problem-4

type CircleArea  = { 
    shape: "circle"; 
    radius: number };

type RectangleArea = {
    shape: "rectangle";
    width: number;
    height: number
}

type Value = CircleArea | RectangleArea;

  function calculateShapeArea (value: Value) {
    if(value.shape==="circle"){
        return parseFloat((Math.PI * value.radius * value.radius).toFixed(2));
    }
    else {
        return parseFloat((value.width * value.height).toFixed(2));
    }
    
}

const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// console.log(circleArea);

const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
});

// console.log(rectangleArea);


    //
}