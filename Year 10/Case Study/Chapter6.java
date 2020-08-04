/**
 *  Chyna Sarmiento
 *	14 May 2017
 *	Chapter 6 Case Study: Word Guess
 */

import java.util.Scanner;

public class Chapter6 {
    public static void main(String[] args) {
    	final String SECRET_WORD = "BRAIN";
    	final String FLAG = "!";
    	String wordSoFar = "", updatedWord = "";
    	String letterGuess, wordGuess = "";
    	int numGuessess = 0;
    	
    	Scanner input = new Scanner(System.in);
    		System.out.println("wordGuess game.\n");
    		for(int i = 0; i < SECRET_WORD.length(); i++){ wordSoFar += "-";
    		}
    		System.out.println(wordSoFar + "\n");
    		
    		do{
    			System.out.print("Eneter a letter (" + FLAG + " to guess entire word): ");
    			letterGuess = input.nextLine();
    			letterGuess = letterGuess.toUpperCase();
    			numGuessess += 1;
    			
    			if(SECRET_WORD.indexOf(letterGuess) >= 0){
    				updatedWord = wordSoFar.substring(0, SECRET_WORD.indexOf(letterGuess));
    				updatedWord += letterGuess;
    				updatedWord += wordSoFar.substring(SECRET_WORD.indexOf(letterGuess)+1, wordSoFar.length());
    				wordSoFar = updatedWord;
    			}
    		} while(!letterGuess.equals(FLAG) && !wordSoFar.equals(SECRET_WORD));
    		
    		  if(letterGuess.equals(FLAG)){ System.out.println("What is your guess?");
    		  	wordGuess = input.nextLine();
    		  	wordGuess = wordGuess.toUpperCase();
    		  	
    		} if(wordGuess.equals(SECRET_WORD) || wordSoFar.equals(SECRET_WORD)){ System.out.println("You won!");
    		} else{ System.out.println("Sorry. You lose.");
    		}
    		input.close();
    		
    		System.out.println("The secret word is " + SECRET_WORD);
    		System.out.println("You made " + numGuessess + " guesses.");
    }
}