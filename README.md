# Leonid's Toy

Leonid Androvsky is a second-generation Lithuanian who took over the hand-made toy shoppe that his father, Antonin, started and managed for 42 years. What was once known as Antonin's Toy World got renamed by Leonid to Leonid's Bespoke Toy Shoppe to attract more modern parents.

> Leonid has hired you to write some code that will help him keep track of his toy inventory. He knows nothing about code or software, so you need to learn the basics so that he can start to automate his business practices.
> 

## **Practice: Toy Data Types**

Think about what kind of data that Leonid would need to store about his toys. For example, the name of the toy. What data type would that be?

Write down some other properties of toys that he would need to keep track of, and the data type for each. When you're done, talk with your teammates, or talk to a member of your instruction team to review your ideas.

## **Toy Objects**

In this exercise, you will be using the object data structure that you learned about in the DataStructures content to represent some toys in code.

## **Learning Objectives**

- You should be able to demonstrate that you can create objects with the correct syntax.
- You should be able to explain that variables are labels that refer to values, not the value itself.

## **Setup**

Run these commands to have a file in which you can write your code.

```jsx
mkdir ~/workspace/toy-objects
cd ~/workspace/toy-objects
touch leonids-toys.js
```

Then open that directory in Visual Studio Code with the following command.

`code .`

And open the `leonids-toys.js` file and follow the directions.

## **Directions**

In the Leonids Toys Data Types, you wrote down all of the properties of a toy that Leonid would need to track for his shoppe. Now you need to create some JavaScript objects to represent a couple of toys.

Define three toys of your choosing. Assign each one to a different variable name. Make your key names as descriptive as possible. Do not abbreviate or use shortcuts. For example, if you chose `manufacturer` as a property of a toy, do not shorten it to `mfr`.

For reference, here's the phone objects that were examples in the Data Structures content.

```jsx
const iPhone = {
    id: 1,
    name: "iPhone",
    maker: "Apple",
    operatingSystem: "iOS",
    price: 900,
    weight: 1.2
}

const galaxy = {
    id: 2,
    name: "Galaxy",
    maker: "Samsung",
    operatingSystem: "Android",
    price: 600,
    weight: 1.4
}
```

When you have defined three toy objects, review with a teammate or a member of your instructional team. When describing your object, also be as descriptive as possible and mention the data types.

> "The iPhone object has a string maker property, a string operating system property, an integer price property, and a float weight property."


## ****Toy Collection****

In this exercise, you will build an array filled with objects. Each item in the array will be one of your toys.

### **Practice: Array of Toy Objects**

Open your leonids-toys.js file again in Visual Studio Code, and re-write it so that the toy objects you created are all contained within a single array. Make sure you assign the array to a variable named toys.

After you rewrite the code, put console.log(toys) at the end of the code.

```jsx
const toys = [
    // Add your objects here
]

console.log(toys)
```

To see if you got the syntax correct, open your terminal and navigate to the directory where your code file is located.

`cd ~/workspace/toy-objects`

Then run the following command to see the fruits of your labor.

`node leonids-toys.js`

If your syntax is correct, you should see your array of objects immediately displayed in the terminal.

If you syntax is incorrect, you will see a lot of gibberish that won't make much, if any, sense. If this happens, check your syntax again, but if you can't make it work, talk to a teammate or an instructor.

## **Practice: Display Property of All Toys**

You get to pick one of the properties that you would like to display for all three of your toys in your array. Write a `for..of` loop that will iterate your array and use `console.log()` to display that property of each toy.

For example, if you have a `name` property on each toy, try accessing that property with dot notation inside the `for..of` loop and you should see output like this.

## **Practice: New Toys**

1. Create 2 new toy objects after the initial array is created. Give each one a unique `id` property value.
2. Use the `push()` array method twice to add each object to the initial array.
3. Run your code with `node leonids-toys.js` in the terminal.
4. You should now see two new values being displayed in the terminal.

## Practice: **Iterate Leonid's Toy Catalog**

Your job is to display a simple catalog for Leonid's toys. Use string interpolation, dot notation to access object properties and your `for..of` loop to display it.

At this point, we're going to assume that you have properties like `name`, `price`, and `color`. Using those as an example, when you run `node leonids-toys.js` in the terminal, you could display this.

You may have different properties, so use whatever properties you have to build a sample string to be used in the bare bones, terminal-based catalog.

## **Practice: Increasing Leonid's Prices**

> Times are tough for Leonid. He's finding that the market for bespoke, artisinal, locally sourced, hand crafted toys doesn't have quite the broad appeal that he thought. He has some loyal customers, but he does have the number of sales each month that he feels he needs to become more profitable.
> 
> 
> To account for lower number of sales, he decides to increase the price of all of his toys across the board. After a few months of increased revenue, he believes he will have the cash needed to buy from other distributors and expand his offerings to appeal to a broader audience.
> 
> He thinks that having vegan-friendly toys with zero carbon footprint will be the extra appeal needed to start moving more products.
> 

Using the strategy above, modify the current `for..of` loop that displays the toy catalog and increase the price of each toy before it is printed for the terminal-based catalog.

He wants the price of every toy to be increased by 5%.

For example, here is the current example output for the catalog.

Here's the output if every toy's price is increased by 5%.