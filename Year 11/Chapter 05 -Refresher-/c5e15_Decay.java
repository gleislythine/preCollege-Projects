/**
 * Chyna Sarmiento
 * 14 September 2017
 * P1: AP Computer Science
 * 
 * Chapter 5 Exercise 15: Decay
 */

import java.util.Scanner;
import java.text.NumberFormat;

public class c5e15_Decay{
    public static void main(String[] args){
    	System.out.println("1. Final Amount");
    	System.out.println("2. Initial Amount");
    	System.out.println("3. Constnt (half-life)");
    	
    	Scanner input = new Scanner(System.in);
    		System.out.print("Find: ");
    		int uChoice = input.nextInt();
    		
    		double y, n, k, t;
    		NumberFormat decimal = NumberFormat.getNumberInstance();
    				 decimal.setMaximumFractionDigits(3);
    				 
    		switch(uChoice){
    			case 1:
    				System.out.print("Enter the initial mass: ");
    				n = input.nextDouble();
    				
    				System.out.print("Enter the constant (half-life): ");
    				k = input.nextDouble();
    				
    				System.out.print("Enter the elapsed time in years: ");
    				t = input.nextDouble();
    				
    				y = n * Math.exp(k *t);
    				System.out.println("Final Amount: " + decimal.format(y));
    			break;
    			
    			case 2:
    				System.out.print("Enter the final mass: ");
    				y = input.nextDouble();
    				
    				System.out.print("Enter the constant (half-life): ");
    				k = input.nextDouble();
    				
    				System.out.print("Enter the elapsed time in years: ");
    				t = input.nextDouble();
    				
    				n = y / Math.exp(k * t);
    				System.out.println("Initial Amount: " + decimal.format(n));
    			break;
    			
    			case 3:
    				System.out.print("Enter the initial mass: ");
    				n = input.nextDouble();
    				
    				System.out.print("Enter the final mass: ");
    				y = input.nextDouble();
    				
    				System.out.print("Enter the elapsed time in years: ");
    				t = input.nextDouble();
    				
    				k = Math.log(y / n) / t;
    				System.out.println("Constant (half-life): " + decimal.format(k));
    			break;
    			
    			default:
    				System.out.println("You have not entered any choice given above.");
    			break;
    		}
    	input.close();
    }
}
