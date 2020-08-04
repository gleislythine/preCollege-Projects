/**
 * Chyna Sarmiento
 * 12 September 2017
 * P1: AP Computer Science
 * 
 * Chapter 5 Exercise 8: Random Generator
 */

public class c5e8_RandomGenerator{
	public static int conMeth(int a, int c, int m, int x, int x1){
    	int y;    	
    	if(x1 == 0){
    		y = (a * x + c) % m;
    		return y;
    	} else{
    		y = (a * conMeth(a, c, m, x, (x1 - 1) ) + c) % m;
    		return y;
    	}
    }
    
    public static void main(String[] args){
    	int a = 1246;
    	int c = 200;
    	int m = 50;
    	int x = 12;
    	
    	System.out.println("Seed = " + x + ", a = " + a + ", c = " + c + ", m = " + m + "\n");
    	
    	for(int i = 0; i < 10; i++){
    		System.out.println("(" + a + " * " + conMeth(a, c, m, 22, i) + " + " + c + ") " + "% " + m + " = " + conMeth(a, c, m, x, i) );
    	}
    }
}
