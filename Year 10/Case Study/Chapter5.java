/**
 * Chapter 5 Case Study: Rock Paper Scissors
 */

import java.util.Scanner;
import java.lang.Math;

public class Chapter5 {
    public static void main(String[] args) {
    	final int ROCK = 1, PAPER = 2, SCISSORS = 3;
    	int playerThrow, computerThrow;
    	
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter your throw (1 = Rock, 2 = Paper, 3 = Scissors): ");
    		playerThrow = input.nextInt();
    	input.close();
    	
    	computerThrow = (int)(3 * Math.random() + 1);
    	
    	System.out.print("Player throws ");
    	switch(playerThrow){
    		case ROCK: System.out.println("rock.");
    		break;
    		
    		case PAPER: System.out.println("paper.");
    		break;
    		
    		case SCISSORS: System.out.println("scissors.");
    	}
    	
    	System.out.print("Computer throws ");
    	switch(computerThrow){
    		case ROCK:     System.out.println("rock.");
    		break;
    		
    		case PAPER:    System.out.println("paper.");
    		break;
    		
    		case SCISSORS: System.out.println("scissors.");
    	}
    	
    	       if(playerThrow == ROCK && computerThrow == ROCK    )    { System.out.println("It's a draw!");
    	} else if(playerThrow == ROCK && computerThrow == PAPER   )    { System.out.println("Computer wins!");
    	} else if(playerThrow == ROCK && computerThrow == SCISSORS)    { System.out.println("Player wins!");
    	}
    	
    	       if(playerThrow == PAPER && computerThrow == ROCK    )   { System.out.println("Player wins!");
    	} else if(playerThrow == PAPER && computerThrow == PAPER   )   { System.out.println("It's a draw!");
    	} else if(playerThrow == PAPER && computerThrow == SCISSORS)   { System.out.println("Computer wins!");
    	}
    	
    	       if(playerThrow == SCISSORS && computerThrow == ROCK    ){ System.out.println("Computer wins!");
    	} else if(playerThrow == SCISSORS && computerThrow == PAPER   ){ System.out.println("Player wins!");
    	} else if(playerThrow == SCISSORS && computerThrow == SCISSORS){ System.out.println("It's a draw!");
    	}
    }
}