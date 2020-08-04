/**
 * Chyna Sarmiento
 * 17 October 2017
 * P1: AP Computer Science
 * 
 * Chapter 07 Exercise 06: Pythagorean Triple
 */
 
import java.lang.Math;

public class c07e06_PythagoreanTriple{
	public static boolean PerfectSquare(int a, int b){
		int sum = (int)(Math.pow(a, 2) + Math.pow(b, 2));
		int   c = (int)(Math.sqrt(sum));
		
		if(Math.pow(c,2) == sum){ return(true);
		}else{       			  return(false);
		}
	}
	
    public static void main(String[] args){
    	for(int a = 1; a <= 100; a++){
    		for(int b = a; b <= 100; b++){
    			if(PerfectSquare(a, b)){
    				int c = (int)(Math.sqrt((int)(Math.pow(a, 2) + Math.pow(b, 2))));
    				System.out.println(a + ", " + b + ", " + c);
    			}
    			
    		}
    	}
    }
}