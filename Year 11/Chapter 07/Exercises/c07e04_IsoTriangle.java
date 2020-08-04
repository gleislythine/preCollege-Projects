/**
 * Chyna Sarmiento
 * 10 October 2017
 * P1: AP Computer Science
 * 
 * Chapter 07 Exercise 04: Isosceles Triangle
 */
 
import java.util.Scanner;

public class c07e04_IsoTriangle{
	public static void addSpaces(int size){
		for(int i = 1; i <= size; i++){
			System.out.print(" ");
		}
	}
	
	public static void drawBar(int size){
		for(int i = 1; i <= size; i++){
			System.out.print("*");
		}
		System.out.println();
	}
	
    public static void main(String[] args){
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter the size: ");
    		int userInput = input.nextInt();
    	input.close();
    	
    	int spaceSize = userInput;
    	
    	for(int i = 1; i <= (userInput + 4); i++){
    		addSpaces(spaceSize);
    		drawBar(i);
    		i += 1;
    		spaceSize--;
    	}
    	
    }
}