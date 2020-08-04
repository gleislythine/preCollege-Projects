/**
 * Chyna Sarmiento
 * 13 September 2017
 * P1: AP Computer Science
 * 
 * Chapter 5 Exercise 9: Guessing Game
 */

import java.util.Scanner;
import java.util.Random;

public class c5e9_GuessingGame{
    public static void main(String[] args){
    	Random r = new Random();
    	int compNum = (int)(20 * Math.random() + 1);
    	
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter a number between 1 and 20: ");
    		int userNum = input.nextInt();
    	input.close();
    	
    	System.out.println("Computer's Number: " + compNum);
    	System.out.println("Player's Number: "	 + userNum);
    	
    	if (userNum > 20 || userNum <= 0){
    	    System.out.println("ENTER A NUMBER BETWEEN 1 AND 20.");
    	} else if(userNum == compNum){
    		System.out.println("Correct!");
    	} else{
    		System.out.println("Better luck next time.");
    	}
    }
}
