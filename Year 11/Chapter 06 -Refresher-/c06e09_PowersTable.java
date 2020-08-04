/**
 * Chyna Sarmiento
 * 17 September 2017
 * P1: AP Computer Science
 * 
 * Chapter 06 Exercise 09: Powers Table
 */

import java.lang.Math;

public class c06e09_PowersTable{        	
    public static void main(String[] args){
    	for(int e = 1; e <= 5; e++){
    	System.out.format("%8s", "x^" + e);
    	}
    	System.out.print("\n");
    	
    	for(int x = 1; x <= 6; x++){
    		for(int e = 1; e <= 5; e++){
    		System.out.format("%8s", (int)Math.pow(x, e));
    		}
    		System.out.print("\n");
    	}
    }
}