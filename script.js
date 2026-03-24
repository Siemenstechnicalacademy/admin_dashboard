[
  {
    "semester": "I SEMESTER",
    "topic": "FRACTION & DECIMAL",
    "title": "Adding Improper Fractions (Like Denominators)",
    "template": "Add the fractions: {{v1}}/{{v3}} + {{v2}}/{{v3}}",
    "formula": "(v1 + v2) + '/' + v3",
    "v1_range": [5, 15], "v2_range": [3, 12], "v3_range": [2, 9]
  },
  {
    "semester": "I SEMESTER",
    "topic": "FRACTION & DECIMAL",
    "title": "Subtracting Improper Fractions (Like Denominators)",
    "template": "Subtract the fractions: {{v1}}/{{v3}} - {{v2}}/{{v3}}",
    "formula": "(v1 - v2) + '/' + v3",
    "v1_range": [15, 25], "v2_range": [5, 10], "v3_range": [2, 9]
  },
  {
    "semester": "I SEMESTER",
    "topic": "FRACTION & DECIMAL",
    "title": "Adding Proper Fractions (Like Denominators)",
    "template": "Find the sum: {{v1}}/{{v3}} + {{v2}}/{{v3}}",
    "formula": "(v1 + v2) + '/' + v3",
    "v1_range": [1, 4], "v2_range": [1, 3], "v3_range": [10, 20]
  },
  {
    "semester": "I SEMESTER",
    "topic": "FRACTION & DECIMAL",
    "title": "Subtracting Decimals",
    "template": "Solve: {{v1}} - {{v2}}",
    "formula": "parseFloat((v1 - v2).toFixed(2))",
    "v1_range": [40.5, 99.9], "v2_range": [10.1, 35.5]
  },
  {
    "semester": "I SEMESTER",
    "topic": "FRACTION & DECIMAL",
    "title": "Dividing Decimals",
    "template": "Divide: {{v1}} ÷ {{v2}}",
    "formula": "parseFloat((v1 / v2).toFixed(2))",
    "v1_range": [100, 500], "v2_range": [2, 10]
  },
  {
    "semester": "I SEMESTER",
    "topic": "FRACTION & DECIMAL",
    "title": "Fraction Multiplication",
    "template": "Multiply: ({{v1}}/{{v2}}) × ({{v3}}/{{v4}})",
    "formula": "(v1 * v3) + '/' + (v2 * v4)",
    "v1_range": [1, 5], "v2_range": [6, 10], "v3_range": [1, 4], "v4_range": [5, 9]
  },
  {
    "semester": "I SEMESTER",
    "topic": "FRACTION & DECIMAL",
    "title": "Subtracting Mixed Fractions",
    "template": "Calculate: {{v1}} {{v2}}/{{v3}} - {{v4}} {{v5}}/{{v3}}",
    "formula": "((v1*v3+v2) - (v4*v3+v5)) + '/' + v3",
    "v1_range": [5, 9], "v2_range": [2, 4], "v3_range": [10, 12], "v4_range": [1, 3], "v5_range": [1, 2]
  },
  {
    "semester": "I SEMESTER",
    "topic": "UNIT AND MEASUREMENTS",
    "title": "Least Common Multiple (LCM)",
    "template": "What is the LCM of {{v1}} and {{v2}}?",
    "formula": "(v1 * v2) / ((a, b) => { while (b) { a %= b; [a, b] = [b, a]; } return a; })(v1, v2)",
    "v1_range": [4, 12], "v2_range": [5, 15]
  },
  {
    "semester": "I SEMESTER",
    "topic": "ALGEBRA",
    "title": "Rules of Indices (Multiplication)",
    "template": "Simplify: (x^{{v1}}) * (x^{{v2}})",
    "formula": "'x^' + (v1 + v2)",
    "v1_range": [2, 10], "v2_range": [2, 10]
  },
  {
    "semester": "I SEMESTER",
    "topic": "ALGEBRA",
    "title": "Logarithm (Product Rule)",
    "template": "Simplify: log({{v1}}) + log({{v2}})",
    "formula": "'log(' + (v1 * v2) + ')'",
    "v1_range": [2, 12], "v2_range": [2, 10]
  }
]