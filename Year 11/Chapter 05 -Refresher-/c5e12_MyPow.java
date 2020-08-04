/**
 * Chyna Sarmiento
 * 14 Septermber 2017
 * P1: AP Computer Science
 * 
 * Chapter 5 Exercise 12: My Pow
 */

import java.util.Scanner;

public class c5e12_MyPow{
    public static void main(String[] args){
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter a value for X: ");
    		double x = input.nextDouble();
    		
    		System.out.print("Enter a value for Y: ");
    		double y = input.nextDouble();
    	input.close();
    	
    	double formula = Math.exp(y * Math.log(x));
    	double Mathpow = Math.pow(x, y);
    	
    	System.out.println("The result from using the formula is: " 		  + formula);
    	System.out.println("The result from using the Math pow() method is: " + Mathpow);
    }
}
