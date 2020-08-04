/**
 * Chyna Sarmiento
 * 14 November 2017
 * P1: AP Computer Science
 * 
 * Chapter 08 Exercise 06: Game of 21
 * Client Code
 */

import java.util.Scanner;
import java.lang.Math;

public class GameOf21{
    public static void main(String[] args){
    	G21game game = new G21game();
    	int card1 = game.userDeal1;
    	int card2 = game.userDeal1;
    	
    	System.out.println("You have dealt 2 cards. These are " + card1 + " and " + card2 + ".");
    	
    	int value1 = game.cardValue1;
    	int value2 = game.cardValue2;
    	
    	game.getCardValue1();
    	
    	game.getCardValue2();
    	/**
    	int userSum = value1 + value2;
    	
    	System.out.println("Your total points are "    + userSum + ".");
    	
    	Scanner input = new Scanner(System.in);
    	System.out.print("\nDo you want to deal one more card? (Y)es or (N)o: ");
    	String dealThree = input.nextLine();
    	
    	int compDeal1 = 1;
    		int compDeal2 = 1;
    		int compValue1 = (int)(2 * Math.random() + 1);
    		int compValue2 = (int)(2 * Math.random() + 1);
    		
    		if(compDeal1 == 1){
    				   if(compValue1 == 1){ compValue1 = 1;
    			} else if(compValue1 == 2){ compValue1 = 11;
    			}
    		}else{
    			for(int i = 2; i <= 10; i++){
    		   		if(compDeal1 == i){ compValue1 = i;
    		   		}
    		   	}
    		   	
    		   	for(int i = 11; i <= 13; i++){
    		   		if(compDeal1 == i){ compValue1 = 10;
    		   		}
    		   	}
    		}
    		
    		if(compDeal2 == 1){
    				   if(compValue2 == 1){ compValue2 = 1;
    			} else if(compValue2 == 2){ compValue2 = 11;
    			}
    		}else{
    			for(int i = 2; i <= 10; i++){
    		   		if(compDeal2 == i){ compValue2 = i;
    		   		}
    		   	}
    		   	
    		   	for(int i = 11; i <= 13; i++){
    		   		if(compDeal2 == i){ compValue2 = 10;
    		   		}
    		   	}
    		}
    		
    		int compSum = compValue1 + compValue2;
    		
    		if(userSum > compSum){
    			int compDeal3  = (int)(13 * Math.random() + 1);
    			int compValue3 = (int)(2  * Math.random() + 1);
    			
    			if(compDeal3 == 1){
    					   if(compValue3 == 1){ compValue3 = 1;
    				} else if(compValue3 == 2){ compValue3 = 11;
    				}
    			}else{
    				for(int i = 2; i <= 10; i++){
    		   			if(compDeal3 == i){ compValue3 = i;
    		   			}
    		   		}
    		   	
    		   		for(int i = 11; i <= 13; i++){
    		   			if(compDeal3 == i){ compValue3 = 10;
    		   			}
    		   		}
    			}
    			int newCompSum = compSum + compValue3;
 
    		do{
    		   if(!dealThree.equalsIgnoreCase("Y") && !dealThree.equalsIgnoreCase("N")){
    		   	 System.out.println("Please enter 'Y' for Yes and 'N' for No.");
    		   	 dealThree = input.next();
    		   }else if(dealThree.equalsIgnoreCase("Y")){
    		   int card3  = (int)(13 * Math.random() + 1);
    		   int value3 = 0;
    		   
    		   if(card3 == 1){
    		   	System.out.println("\nYou got an ace for card 3!");
    		   	int userAce;
    		   	
    		   	do{
    		   		System.out.print("Pick 1 or 11 to add to your total points: ");
    		   		userAce = input.nextInt();
    		   		
    		   			   if(userAce == 1) { value3 = 1;
    		   		} else if(userAce == 11){ value3 = 11;
    		   		} else     				{ System.out.println("Please enter 1 or 11 only.\n");
    		   		}
    		   	} while(userAce != 1 && userAce != 11);
    		   	
    		   } else{
    		   	for(int i = 2; i <= 10; i++){
    		   		if(card3 == i){ value3 = i;
    		   		}
    		   	}
    		   	
    		   	for(int i = 11; i <= 13; i++){
    		   		if(card3 == i){ value3 = 10;
    		   		}
    		   	}
    		   }
    		   
    		   int newSum = userSum + value3;
    		   System.out.println("\nYou now have a total of " + newSum + " points.");
    		   
    		   	if(userSum > newCompSum){
    				System.out.println("You win!");
    			}else if(userSum < newCompSum){
    				System.out.println("Computer wins!");
    			} else if(userSum > compSum){
    				System.out.println("You win!");
    			}else if (userSum < compSum){
    				System.out.println("Computer wins!");
    			}
    	} else if(dealThree.equalsIgnoreCase("N")){
    			if(userSum > newCompSum){
    				System.out.println("You win!");
    			}else if (userSum < newCompSum){
    				System.out.println("Computer wins!");
    			}else if(userSum > compSum){
    				System.out.println("You win!");
    			}else if (userSum < compSum){
    				System.out.println("Computer wins!");
    			}
    		}
    		
    		} while(!dealThree.equalsIgnoreCase("Y") && !dealThree.equalsIgnoreCase("N"));
    	}*/
    }
}
