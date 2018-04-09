function triangle(s1 = 0, s2 = 0, s3 = 0) {
    s1 = parseFloat(s1);
    s2 = parseFloat(s2);
    s3 = parseFloat(s3);

    if(!isTriangle()){
        return "not a triangle";
    }

    if(isEquilateral()) {
        return "equilateral";
    }

    if(isIsosceles()) {
        return "isosceles";
    }

    return "scalene";
    
    function isEquilateral() {
        return (s1 === s2 && s2 === s3);
    }
    
    function isIsosceles() {
        return (s1 === s2 || s2 === s3 || s1 === s3);
    }

    function isTriangle() {
        return (
            s1 + s2 > s3 
            && s2 + s3 > s1
            && s1 + s3 > s2
        )
    }
}
    
module.exports = triangle;