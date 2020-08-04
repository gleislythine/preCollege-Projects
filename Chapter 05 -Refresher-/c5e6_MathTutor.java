/**
 * Chyna Sarmiento
 * 12 September 2017
 * P1: AP Computer Science
 * 
 * Chapter 5 Exercise 6: Math Tutor
 */

import java.util.Scanner;
import java.util.Random;

public class c5e6_MathTutor{
    public static void main(String[] args){
    	int ranOp, ranNum1, ranNum2, userAns, rightAns;
    	String operator;
    	
    	Random r = new Random();
    	ranNum1  = r.nextInt(10) + 1;
    	ranNum2  = r.nextInt(10) + 1;
    	ranOp    = r.nextInt(4)  + 1;
    	
    		   if(ranOp == 1){  operator = "+";
    		   					rightAns = ranNum1 + ranNum2;
    	} else if(ranOp == 2){  operator = "-";
    							rightAns = ranNum1 - ranNum2;
    	} else if(ranOp == 3){  operator = "*";
    							rightAns = ranNum1 * ranNum2;
    	} else {				operator = "/";
    							rightAns = ranNum1 / ranNum2;
    	}
    	
    	Scanner input = new Scanner(System.in);
    		System.out.println("What is " + ranNum1 + " " + operator + " " + ranNum2 + "? ");
    		userAns = input.nextInt();
    	input.close();
    	
    	if(rightAns == userAns){
    		System.out.println("Correct!");
    	} else{
    		System.out.println("Your answer is wrong. The right answer is " + rightAns + ".");
    	}
    }
}
