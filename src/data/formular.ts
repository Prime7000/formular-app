import Ionicons from "@expo/vector-icons/Ionicons";

type IconName = React.ComponentProps<typeof Ionicons>["name"];

type Formula = {
  id: number;
  title: string;
  formula: string;
  description: string;
  note: string;
  icon: IconName;
};

const formulas: Formula[] = [
  {
    id: 1,
    title: "Simple Interest",
    formula: "SI = (P × R × T) / 100",
    description: "Calculate interest earned on a principal amount.",
    note: "P is the principal, or starting amount; R is the annual interest rate written as a percentage; and T is the time in years. Simple interest is calculated only on the original principal, so the interest does not earn additional interest. Convert months to years by dividing by 12. For example, P = 1,000, R = 5, and T = 2 give SI = 100 and a final amount of 1,100.",
    icon: "cash-outline",
  },
  {
    id: 2,
    title: "Area of Circle",
    formula: "A = πr²",
    description: "Calculate the area of a circle using its radius.",
    note: "r is the radius, the distance from the center of the circle to its edge. If you are given the diameter, divide it by 2 before using this formula. Square the radius first, then multiply by π; use your calculator’s π value for better accuracy. For a radius of 3 cm, A = 9π ≈ 28.27 cm². Area is always expressed in square units.",
    icon: "ellipse-outline",
  },
  {
    id: 3,
    title: "Compound Interest",
    formula: "CI = P(1 + R/100)^T - P",
    description: "Calculate interest compounded annually.",
    note: "P is the original principal, R is the annual interest rate as a percentage, and T is the number of years. This formula assumes a constant rate, annual compounding, and no additional deposits or withdrawals. Interest earns further interest each year. Subtracting P gives only the interest earned. For P = 1,000, R = 5, and T = 2, the final balance is 1,102.50 and CI = 102.50.",
    icon: "trending-up-outline",
  },
  {
    id: 4,
    title: "Circumference of Circle",
    formula: "C = 2πr",
    description: "Calculate the distance around a circle.",
    note: "C is the circumference, the total distance around the circle, and r is the radius. Multiply the radius by 2 and then by π. If the diameter d is given instead, use C = πd. For r = 7 cm, C = 14π ≈ 43.98 cm. Keep the result in length units such as centimeters or meters, rather than square units.",
    icon: "sync-outline",
  },
  {
    id: 5,
    title: "Area of Rectangle",
    formula: "A = l × w",
    description: "Calculate the area using length and width.",
    note: "l is the rectangle’s length and w is its width. Convert both measurements to the same unit before multiplying them. The result measures the surface enclosed by the rectangle, so it must be written in square units. For a rectangle 8 cm long and 5 cm wide, A = 8 × 5 = 40 cm². Use this for the space inside the shape, not the distance around it.",
    icon: "square-outline",
  },
  {
    id: 6,
    title: "Perimeter of Rectangle",
    formula: "P = 2(l + w)",
    description: "Calculate the total distance around a rectangle.",
    note: "P is the perimeter, or total distance around the rectangle; l is its length and w is its width. A rectangle has two equal lengths and two equal widths, which is why their sum is multiplied by 2. Use the same unit for both measurements. For l = 8 cm and w = 5 cm, P = 2 × (8 + 5) = 26 cm.",
    icon: "grid-outline",
  },
  {
    id: 7,
    title: "Area of Triangle",
    formula: "A = ½ × b × h",
    description: "Calculate the area using base and height.",
    note: "b is the chosen base and h is the perpendicular distance from that base to the opposite vertex. The height must meet the base, or its extended line, at a right angle; a sloping side is not usually the height. Multiply base by height, then divide by 2. For b = 10 cm and h = 6 cm, A = 30 cm². Use matching length units.",
    icon: "triangle-outline",
  },
  {
    id: 8,
    title: "Pythagorean Theorem",
    formula: "a² + b² = c²",
    description: "Find the relationship between sides of a right triangle.",
    note: "This relationship applies only to a right triangle. The side c is the hypotenuse, which lies opposite the right angle and is the longest side; a and b are the other two sides. To find c, use c = √(a² + b²). For a = 3 cm and b = 4 cm, c = 5 cm. To find a missing shorter side, subtract the known shorter side’s square from c², then take the square root.",
    icon: "git-merge-outline",
  },
  {
    id: 9,
    title: "Quadratic Formula",
    formula: "x = (-b ± √(b² - 4ac)) / 2a",
    description: "Solve quadratic equations of the form ax² + bx + c = 0.",
    note: "First write the equation as ax² + bx + c = 0, with a ≠ 0, and identify each coefficient with its sign. Divide the entire numerator by 2a. The discriminant b² - 4ac determines the roots: positive gives two real roots, zero gives one repeated real root, and negative gives complex roots. For x² - 5x + 6 = 0, a = 1, b = -5, and c = 6, giving x = 2 or x = 3.",
    icon: "calculator-outline",
  },
  {
    id: 10,
    title: "Slope of a Line",
    formula: "m = (y₂ - y₁) / (x₂ - x₁)",
    description: "Calculate the slope between two points.",
    note: "m measures the change in y for each unit change in x between (x₁, y₁) and (x₂, y₂). Subtract the coordinates in the same order in both numerator and denominator. A positive slope rises from left to right; a negative slope falls. For (1, 2) and (3, 6), m = 4/2 = 2. A horizontal line has slope 0, while a vertical line has an undefined slope because its denominator is zero.",
    icon: "stats-chart-outline",
  },
  {
    id: 11,
    title: "Distance Between Points",
    formula: "d = √((x₂ - x₁)² + (y₂ - y₁)²)",
    description: "Calculate the straight-line distance between two points.",
    note: "This formula gives the straight-line distance between two points on a flat coordinate plane. Subtract the x-coordinates and y-coordinates, square each difference, add the squares, and take the square root. Use the same length unit and scale on both axes. For (1, 2) and (4, 6), d = √(3² + 4²) = 5 units. Reversing the order of the points gives the same nonnegative distance.",
    icon: "navigate-outline",
  },
  {
    id: 12,
    title: "Midpoint Formula",
    formula: "M = ((x₁ + x₂)/2, (y₁ + y₂)/2)",
    description: "Find the midpoint between two coordinates.",
    note: "M is the point exactly halfway along the line segment joining (x₁, y₁) and (x₂, y₂). Add the two x-coordinates and divide by 2, then do the same with the y-coordinates. Keep the result as an ordered pair, not a single number. For endpoints (2, 4) and (6, 8), M = (4, 6). This also works with negative or decimal coordinates.",
    icon: "locate-outline",
  },
  {
    id: 13,
    title: "Volume of Cube",
    formula: "V = s³",
    description: "Calculate the volume of a cube using its side length.",
    note: "V is the volume and s is the length of one edge of the cube. Every edge must have the same length for this formula to apply. Cubing means multiplying the edge length by itself three times, not multiplying it by 3. For s = 4 cm, V = 4 × 4 × 4 = 64 cm³. If length, width, and height differ, use the rectangular-prism formula V = l × w × h instead.",
    icon: "cube-outline",
  },
  {
    id: 14,
    title: "Volume of Cylinder",
    formula: "V = πr²h",
    description: "Calculate the volume of a cylinder.",
    note: "r is the radius of the circular base and h is the perpendicular height between the two bases. Find the base area πr², then multiply it by the height. If given the diameter, divide it by 2 to get r. Use matching length units and express the result in cubic units. For r = 3 cm and h = 5 cm, V = 45π ≈ 141.37 cm³.",
    icon: "server-outline",
  },
  {
    id: 15,
    title: "Volume of Sphere",
    formula: "V = (4/3)πr³",
    description: "Calculate the volume of a sphere.",
    note: "r is the radius, measured from the sphere’s center to its surface. If the diameter is supplied, halve it before calculating. Cube the radius and multiply by π and by 4/3; retain enough decimal places until the final rounding step. For r = 3 cm, V = (4/3) × π × 27 = 36π ≈ 113.10 cm³. The result measures the space inside the sphere and uses cubic units.",
    icon: "globe-outline",
  },
  {
    id: 16,
    title: "Percentage",
    formula: "Percentage = (Part / Whole) × 100",
    description: "Express a quantity as a percentage of a whole.",
    note: "Divide the part by the whole, then multiply by 100 to express the ratio as a percentage. The whole must not be zero, and the part and whole must use the same units. For 15 correct answers out of 20 questions, the percentage is (15/20) × 100 = 75%. A result above 100% means the part is greater than the comparison whole. To convert a percentage back to a decimal, divide by 100.",
    icon: "pie-chart-outline",
  },
  {
    id: 17,
    title: "Arithmetic Mean",
    formula: "Mean = Σx / n",
    description: "Calculate the average of a set of numbers.",
    note: "Σx means add all the values, and n is the number of values in the data set. Divide the sum by the count, including zero and negative values where they occur. At least one value is needed. For 4, 6, and 8, the mean is 18/3 = 6. Very large or small outliers can pull the mean away from a typical value; this formula gives each observation equal weight.",
    icon: "bar-chart-outline",
  },
  {
    id: 18,
    title: "Probability",
    formula: "P(E) = Favorable Outcomes / Total Outcomes",
    description: "Calculate the probability when outcomes are equally likely.",
    note: "E is the event of interest. Count the outcomes that satisfy E and divide by the number of all possible outcomes, assuming every outcome is equally likely and the total is greater than zero. For a fair six-sided die, the probability of an even number is 3/6 = 1/2 = 50%. Probability ranges from 0 for an impossible event to 1 for a certain event. Unequally likely outcomes require their individual probabilities instead of simple counting.",
    icon: "dice-outline",
  },
  {
    id: 19,
    title: "Speed",
    formula: "Speed = Distance / Time",
    description: "Calculate average speed from distance and time.",
    note: "This formula gives average speed: total distance traveled divided by total elapsed time. Include stops in the elapsed time when calculating average speed for the entire journey, and use a time greater than zero. For 150 km covered in 3 hours, the average speed is 50 km/h. Convert minutes to hours when using kilometers per hour. Average speed uses distance traveled, which can differ from the straight-line displacement used for average velocity.",
    icon: "speedometer-outline",
  },
  {
    id: 20,
    title: "Density",
    formula: "ρ = m / V",
    description: "Calculate density using mass and volume.",
    note: "ρ, the Greek letter rho, represents density; m is mass and V is volume. Divide the object’s mass by the volume it occupies, using a volume greater than zero. For m = 200 g and V = 50 cm³, ρ = 4 g/cm³. Kilograms and cubic meters give kg/m³. Density compares mass per unit volume, so a larger object is not necessarily denser. Use compatible units when comparing materials.",
    icon: "scale-outline",
  },
];

export default formulas;
