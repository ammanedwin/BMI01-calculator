// BMI calculator using inquirer prompt
import inquirer from "inquirer";
const question = [
    { message: "what is your weight(KG)",
        type: "number", name: "weight" },
    { message: "what is your height(M)",
        type: "number", name: "height" },
];
const calculateBMI = (weight, height) => weight / (height * height);
const main = async () => {
    const { weight, height } = await inquirer.prompt(question);
    console.log(`your BMI is : ${calculateBMI(weight, height).toFixed(2)}`);
};
main();
