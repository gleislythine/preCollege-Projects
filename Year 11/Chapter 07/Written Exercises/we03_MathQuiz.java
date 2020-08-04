/**
 * Chyna Sarmiento
 * 19 10 2017
 * P1: AP Computer Science
 * 
 * Written Exercise: Math Quiz
 */

import java.util.Scanner;
import java.lang.Math;

public class we03_MathQuiz{
	public static void simple(){
		int counter = 0;
		
		Scanner input = new Scanner(System.in);
			System.out.print("How many questions do you want to answer? ");
			int numQues = input.nextInt();
			
			do{
				counter++;
				int num1 = (int)(100 * Math.random() + 1);
				int num2 = (int)(100 * Math.random() + 1);
		
				System.out.print(counter + ". " + num1 + " + " + num2 + " = ");
			 	int userAns = input.nextInt();
				
				int rightAns = num1 + num2;
				
				if(userAns == rightAns){ System.out.println("Correct!");
				}else{					 System.out.println("Wrong.");
				}
			}while(counter < numQues);
		input.close();
	}
	
	public static void difficult(){
		int counter = 0;
		
		Scanner input = new Scanner(System.in);
			System.out.print("How many questions do you want to answer? ");
			int numQues = input.nextInt();
			
			do{
				counter++;
				int num1 = (int)(100 * Math.random() + 1);
				int num2 = (int)(100 * Math.random() + 1);
		
				System.out.print(counter + ". " + num1 + " * " + num2 + " = ");
			 	int userAns = input.nextInt();
				
				int rightAns = num1 * num2;
				
				if(userAns == rightAns){ System.out.println("Correct!");
				}else{					 System.out.println("Wrong.");
				}
			}while(counter < numQues);
		input.close();
	}
	
    public static void main(String[] args){
    	Scanner input = new Scanner(System.in);
    		System.out.print("Choose 1 for simple questions, 2 for difficult questions: ");
    		int userPick = input.nextInt();
    
    	
    		  if(userPick == 1){ simple();
    	}else if(userPick == 2){ difficult();
    	}else{ System.out.println("Please choose 1 or 2.");
    	}
    }
}
