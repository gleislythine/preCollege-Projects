/**
 * RemoveString
 */
 
import java.util.Scanner;

public class C6ex19{
    public static void main(String[] args){
    	Scanner input = new Scanner(System.in);
    		System.out.print("Enter a sentence: ");
    		String sentence = input.nextLine();
    		
    		System.out.print("Enter a string: ");
    		String string = input.nextLine();
    	input.close();
    	
    	String newSentence = sentence.replace(string, "");
    	System.out.println(newSentence);
    }
}