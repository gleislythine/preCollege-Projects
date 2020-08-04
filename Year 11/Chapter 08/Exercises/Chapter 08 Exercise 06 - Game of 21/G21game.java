/**
 * Chyna Sarmiento
 * 15 November 2017
 * P1: AP Computer Science
 * 
 * Chapter 08 Exercise 06: Game of 21
 * Player Class
 */
 
import java.lang.Math;
import java.util.Scanner;

public class G21game{
	public int userDeal1;
	public int userDeal2;
	public int cardValue1;
	public int cardValue2;
	private int userDeal3;
	public  int userSum;
	
	public G21game(){
		this.userDeal1 = 1;
		this.userDeal2 = 1;
		this.cardValue1 = 0;
		this.cardValue2 = 0;
		this.userDeal3 = (int)(13 * Math.random() + 1);
	}
	
	public int getCard1(){
		return(this.userDeal1);
	}
	
	public int getCardValue1(){
		int value1;
		if(userDeal1 == 1){
    		Scanner input = new Scanner(System.in);
    		System.out.println("\nYou got an ace for card 1!");
    		int userAce;
    		do{
    		System.out.print("Pick 1 or 11 to add to your total points: ");
			userAce = input.nextInt();
			
    				   if(userAce == 1) { value1 = 1;
    				   return(value1);
				} else if(userAce == 11){ value1 = 11;
				return(value1);
				} else					{ System.out.println("Please enter 1 or 11 only.\n");
				}
    		} while(userAce != 1 && userAce != 11);
    	} else{
			for(int i = 2; i <= 10; i++){
				if(getCard1() == i){ value1 = i;
				return(value1);
				}
			}
		
			for(int i = 11; i <= 13; i++){
				if(getCard1() == i){ value1 = 10;
				return(value1);
				}
			}
		}
	}
	
	public int getCard2(){
		return(this.userDeal2);
	}
	
	public int getCardValue2(){
		int value2;
		if(userDeal2 == 1){
    		Scanner input = new Scanner(System.in);
    		System.out.println("\nYou got an ace for card 2!");
    		int userAce;
    		do{
    		System.out.print("Pick 1 or 11 to add to your total points: ");
			userAce = input.nextInt();
    		
    				   if(userAce == 1) { value2 = 1;
    				   return(value2);
				} else if(userAce == 11){ value2 = 11;
				return(value2);
				} else					{ System.out.println("Please enter 1 or 11 only.\n");
				}
    		} while(userAce != 1 && userAce != 11);
			
    	} else{
			for(int i = 2; i <= 10; i++){
				if(getCard2() == i){ value2 = i;
				return(value2);
				}
			}
		
			for(int i = 11; i <= 13; i++){
				if(getCard2() == i){ value2 = 10;
				return(value2);
				}
			}
		}
	}
}