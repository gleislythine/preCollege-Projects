/**
 * Chyna Sarmiento
 * 26 October 2017
 * P1: AP Computer Science
 * 
 * Chapter 08 Case Study: Rock Paper Scissors Game
 * Client Code
 */
 
import java.util.Scanner;

public class RPS2{
    public static void main(String[] args){
    	RPSGame   rps		  = new RPSGame();
    	RPSPlayer rpsOpponent = new RPSPlayer();
    	int rounds;
    	int playerThrow;
    	
    	Scanner input = new Scanner(System.in);
    		System.out.print("How many rounds? ");
    		rounds = input.nextInt();
    		
    		for(int i = 0; i < rounds; i++){
    			System.out.print("Enter your throw (ROCK = 1, PAPER =  2, SCISSORS = 3): ");
    			playerThrow = input.nextInt();
    			rpsOpponent.makeThrow(playerThrow);
    			
    			rps.makeCompThrow();
    			rps.announceWinner(rpsOpponent.getThrow());
    		}
    		
    		rps.bigWinner();
    }
}