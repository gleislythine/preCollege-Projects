/**
 * Chyna Sarmiento
 * 17 September 2017
 * P1: AP Computer Science
 * 
 * Chapter 5 Exercise 17: Inverse Trigonometry Functions
 */

import java.util.Scanner;
import java.text.NumberFormat;
import java.lang.Math;

public class c5e17_InverseTrigFunctions{
    public static void main(String[] args){
    	NumberFormat decimal = NumberFormat.getNumberInstance();
    				 decimal.setMinimumFractionDigits(3);
    	double x, aSin, aCos, aTan, aRad;
    	
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter an angle in degrees: ");
    		x = input.nextDouble();
    	input.close();
    	
    	aRad = Math.toRadians(x);
    	aSin = Math.asin(aRad);
    	aCos = Math.acos(aRad);
    	aTan = Math.atan(aRad);
    	
    	System.out.println("Arcsin: " + decimal.format(aSin));
    	System.out.println("Arccos: " + decimal.format(aCos));
    	System.out.println("Arctan: " + decimal.format(aTan));
    }
}
