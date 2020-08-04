/**
 * Chyna Sarmiento
 * 26 October 2017
 * P1: AP Computer Science
 * 
 * Chapter 08 Case Study: Rock Paper Scissors Game
 * Player Class
 */

public class RPSPlayer{
    private int playerThrow;
    
    public RPSPlayer(){
    	playerThrow = 1;
    }
    
    public void makeThrow(int newThrow){
    	playerThrow = newThrow;
    }
    
    public int getThrow(){
    	return(playerThrow);
    }
}
