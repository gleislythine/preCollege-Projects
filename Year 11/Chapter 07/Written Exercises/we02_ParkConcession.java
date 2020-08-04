/**
 * Chyna Sarmiento
 * 19 October 2017
 * P1: AP Computer Science
 * 
 * Written Exercise: Park Consession
 */

import java.util.Scanner;

public class we02_ParkConcession{
	public static double totalCost(int bL1, int bL2, int bL3){
		double bL1cost = bL1 * 5.50;
		double bL2cost = bL2 * 6.25;
		double bL3cost = bL3 * 7.50;
		double total   = bL1cost + bL2cost + bL3cost;
		
		return(total);
	}
	
    public static void main(String[] args){
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter the number of boxes you want for Lunch 1: ");
    		int boxLunch1 = input.nextInt();
    		
    		System.out.print("Enter the number of boxes you want for Lunch 2: ");
    		int boxLunch2 = input.nextInt();
    		
    		System.out.print("Enter the number of boxes you want for Lunch 3: ");
    		int boxLunch3 = input.nextInt();
    	input.close();
    	
    	System.out.println("Total: $" + totalCost(boxLunch1, boxLunch2, boxLunch3));
    }
}
