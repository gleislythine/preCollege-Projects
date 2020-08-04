/**
 * Password
 */

import java.util.Scanner;

public class C6ex17{
    public static void main(String[] args){
    	int tries = 0;
    	final int SENTINEL = 3;
    	String userInput;
    	String password = "shemhamforash";
    	
    	Scanner input = new Scanner(System.in);
    		do{
    			System.out.print("Enter the password: ");
    			userInput = input.nextLine();
    			
    		if(password.equals(userInput)){
    			tries = 4;
    			System.out.println("Welcome!");
    		} else{ 
    			tries++;
    			System.out.println("The password you typed is incorrect.");
    			if(tries == 3){ System.out.println("Access denied."); }
    		}
    		}while(tries < SENTINEL);
    	input.close();
    }
}