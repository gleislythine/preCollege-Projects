/**
 * Chyna Sarmiento
 * 14 September 2017
 * P1: AP Computer Science
 * 
 * Chapter 5 Exercise 14: Bacteria Growth
 */

import java.util.Scanner;

public class c5e14_BacteriaGrowth{
    public static void main(String[] args){
    	double y, n, k, t;
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter iniial bacteria amount: ");
    		n = input.nextDouble();
    		
    		System.out.print("Enter a constant value for k: ");
    		k = input.nextDouble();
    		
    		System.out.print("Enter the growth time period in hours: ");
    		t = input.nextDouble();
    	input.close();
    	
    	y = n * Math.exp(k * t);
    	
    	System.out.println((int)y + " bacteria will be present after " + t + " hours.");
    }
}
