/**
 * Chyna Sarmiento
 * 26 October 2017
 * P1: AP Computer Science
 * 
 * Chapter 08 Case Study: Rock Paper Scissors Game
 * Game Class
 */

import java.lang.Math;

public class RPSGame{
    public static final int ROCK = 1, PAPER = 2, SCISSORS = 3;
    private int compThrow;
    private int playerWins = 0, computerWins = 0;
    
    public RPSGame(){
    	compThrow    = (int)(3 * Math.random() + 1);
    	playerWins   = 0;
    	computerWins = 0;
    }
    
    public void makeCompThrow(){
    	compThrow    = (int)(3 * Math.random() + 1);
    }
    
    public int getCompThrow(){
    	return(compThrow);
    }
    
    public void announceWinner(int playerThrow){
    	System.out.print("You throw ");
    	switch(playerThrow){
    		case ROCK:
    			System.out.println("ROCK.");
    		break;
    		
    		case PAPER:
    			System.out.println("PAPER.");
    		break;
    		
    		case SCISSORS:
    			System.out.println("SCISSORS.");
    		break;
    	}
    	
    		   if(playerThrow == ROCK && compThrow == ROCK)	   { System.out.println("It's a draw!\n");
    	} else if(playerThrow == ROCK && compThrow == PAPER)   { System.out.println("Computer wins!\n");
    			computerWins += 1;
    	} else if(playerThrow == ROCK && compThrow == SCISSORS){ System.out.println("You win!\n");
    			playerWins 	 += 1;
    	}
    	
    		   if(playerThrow == PAPER && compThrow == ROCK)	{ System.out.println("You win!\n");
    		   	 playerWins	  += 1;
    	} else if(playerThrow == PAPER && compThrow == PAPER)	{ System.out.println("It's a draw!\n");
    	} else if(playerThrow == PAPER && compThrow == SCISSORS){ System.out.println("Computer wins!\n");
    			 computerWins += 1;
    	}
    	
    		   if(playerThrow == SCISSORS && compThrow == ROCK)	   { System.out.println("Computer wins!\n");
    		   	 computerWins += 1;
    	} else if(playerThrow == SCISSORS && compThrow == PAPER)   { System.out.println("You win!\n");
    			 playerWins	  += 1;
    	} else if(playerThrow == SCISSORS && compThrow == SCISSORS){  System.out.println("It's a draw!\n");
    	}
    	
    }
    
    public void bigWinner(){
    		   if(computerWins > playerWins)  { System.out.println("Computer wins!\n");
    	} else if(playerWins   > computerWins){ System.out.println("You win!\n");
    	} else     {							System.out.println("It's a draw!\n");
    	}
    }
}