/**
 * CountVowels
 */

import java.util.Scanner;

public class C6ex20 {
    
    public static void main(String[] args) {
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter text: ");
    		String userText = input.nextLine();
    	input.close();
    	
    	int vowelOccur = userText.length() - userText.replaceAll("a|e|i|o|u", "").length() + 1;
    	System.out.println("The number of vowels in " + userText + " is " + vowelOccur);
    }
}