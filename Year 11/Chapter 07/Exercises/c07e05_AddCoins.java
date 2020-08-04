/**
 * Chyna Sarmiento
 * 10 October 2017
 * P1: AP Computer Science
 * 
 * Chapter 07 Exercise 05: Add Coins
 */

import java.util.Scanner;

public class c07e05_AddCoins{
	public static void getDollarAmount(double p, double n, double d, double q){
		p *= 1;
		n *= 5;
		d *= 10;
		q *= 25;
		double total = (p + n + d + q) / 100;
		
		System.out.print("$" + total);
	}
	
    public static void main(String[] args){
    	System.out.println("Enter your total coins:\n");
    	
    	Scanner input = new Scanner(System.in);
    		System.out.print("Quarters: ");
    		double quarters = input.nextDouble();
    		
    		System.out.print("Dimes: ");
    		double dimes    = input.nextDouble();
    		
    		System.out.print("Nickels: ");
    		double nickels  = input.nextDouble();
    		
    		System.out.print("Pennies: ");
    		double pennies  = input.nextDouble();
    	input.close();
    	
    	System.out.print("\nTotal: ");
    	getDollarAmount(pennies, nickels, dimes, quarters);
    }
}