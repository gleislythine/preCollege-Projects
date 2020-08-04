/**
 * Chyna Sarmiento
 * 3 October 2017
 * P1: AP Computer Science
 * 
 * :
 */

import java.util.Scanner;

public class IDK{
    public static void main(String[] args){
/**   	System.out.print("Enter integers. Enter -1 to exit. ");
    	System.out.println("Count of integers entered will be returned");
    	int n = 0;
    	int c = 0;
    	
    	while(n != -1){
    		Scanner input = new Scanner(System.in);
    		n = input.nextInt();
    		c++;
    		input.close();
    	}
    	System.out.println(c);*/
    	
    	System.out.print("Enter integers. Enter -1 to exit. ");
    	System.out.println("Count of integers entered will be returned");
    	int n = 0;
    	int c = 0;
    	
    	while(n >= -1){
    		Scanner input = new Scanner(System.in);
    		n = input.nextInt();
    		c++;
    		input.close();
    	}
    	c--;
    	System.out.println(c);
    	
/**    	int count1 = 0, count2 = 0, inc = 1;
    	for(int i = 0; i < 11; i++){
    		count1 += inc;
    		inc = -inc;
    		count2 += inc;
    	}
    	System.out.println(count1 - count2);*/
    	
/**    	int i = 0, n = 100;
    	for(i++; i < n; n--){
    		i++;
    		System.out.println(i);
    	}*/
/**
    	int n = 100;
    		for(count = 1; count <= n; count++){
    			System.out.println(count);
    		}*/
/**    	int count = 1, n = 100;
    			while(count <= n){
    				System.out.println(count);
    				count++;
    			}*/
    }
}
