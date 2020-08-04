/**
 * Chyna Sarmiento
 * 02 November 2017
 * P1: AP Computer Science
 * 
 * Chapter 08 Exercise 04: Dice Roll Game
 * Client Code
 */

import java.util.Scanner;

public class DiceRollGame{
    public static void main(String[] args){
    	DRPlayer playerPlays = new DRPlayer();
    	int playerRisk;
    	int PAR = 1000;
    	
    	Scanner input = new Scanner(System.in);
    		System.out.println("You have " + PAR + " points.");
    		System.out.println("To quit game, enter: -1; To make a call: 0 for low, 1 for high\n");
    		
    		do{
    			System.out.print("How many points do you want to risk?: ");
    			playerRisk = input.nextInt();
    			
    			if(playerRisk != -1){ PAR = playerPlays.roll(playerRisk, PAR);
    			}
    			
    		} while(playerRisk != -1);
    }
}