/**
 * Chyna Sarmiento
 * 24 October 2017
 * P1: AP Computer Science
 * 
 * Chapter 07 Exercise 08: High Low Game
 */

import java.util.Scanner;

public class c07e08_HiLo{
    public static void main(String[] args){
    	Scanner input = new Scanner(System.in);
    		System.out.println("High Low Game\n");
    		
    		System.out.println("RULES");
    		System.out.println("Numbers 1 through 6 are low");
    		System.out.println("Numbers 8 through 13 are high");
    		System.out.println("Number 7 is neither high or low");
    		System.out.println("\nYou have 1000 points.\n");
    		
    		System.out.print("Enter the points to risk: ");
    		int userInput = input.nextInt();
    }
}