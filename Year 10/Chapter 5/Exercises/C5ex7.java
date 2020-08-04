/**
 *  EquivalentFractions
 */
 
import java.util.Scanner;
import java.util.ArrayList;
 
public class C5ex7 {
    public static void main(String [] Args) {
    	ArrayList<String> L1 = new ArrayList<String>();
            L1.add("1. 21/3");
            L1.add("2. 2/3");
            L1.add("3. 4/3");
            L1.add("4. 28/4");
            L1.add("5. 8/12");
            L1.add("6. 1 1/3");
            L1.add("7. 5/1");
            L1.add("8. 125/5");
            
        ArrayList<String> L2 = new ArrayList<String>();
            L2.add("1. 12/15");
            L2.add("2. 2/7");
            L2.add("3. 2/12");
            L2.add("4. 22/7");
            L2.add("5. 9/21");
            L2.add("6. 1/6");
            L2.add("7. 6/14");
            L2.add("8. 8/10");
        
        System.out.println("Pick a Difficulty.");
        System.out.println("1 for Beginner");
        System.out.println("2 for Advanced");
        
        int points = 0, ansCor = 0,counter = 0, wrong;
        
        Scanner input = new Scanner(System.in);
            System.out.print("Enter your choice: ");
            int diffPick = input.nextInt();
            
            System.out.println("\nEquivalent Fractions Quiz");
            
            if(diffPick == 1){
             for(String nLine : L1){ System.out.format("\t" + nLine + "\n"); }
            
             System.out.println("\nEnter '0' if there's no eqivalent fraction.");
             System.out.print("Which fraction is equivalent to fraction #:\n");
            
            do{ counter++;
                System.out.print(counter + ". #");
                int userPick = input.nextInt();
           
             switch(counter){
             case 1:
                 if(userPick == 4){ points += 1; ansCor += 1; }
             break;
           
             case 2:
                 if(userPick == 5){ points += 1; ansCor += 1; }
             break;
           
             case 3:
                 if(userPick == 6){ points += 1; ansCor += 1; }
             break;
           
             case 4:
                 if(userPick == 1){ points += 1; ansCor += 1; }
             break;
           
             case 5:
                 if(userPick == 2){ points += 1; ansCor += 1; }
             break;
           
             case 6:
                 if(userPick == 3){ points += 1; ansCor += 1; }
             break;
           
             case 7:
                 if(userPick == 0){ points += 1; ansCor += 1; }
             break;
           
             case 8:
                 if(userPick == 0){ points += 1; ansCor += 1; }
             break;
         }
        }while(counter < 8);
        
        } else if (diffPick == 2){
            for(String nLine : L2){ System.out.format("\t" + nLine + "\n"); }
            
            System.out.println("\nEnter '0' if there's no eqivalent fraction.");
            System.out.print  ("Which fraction is equivalent to fraction #:\n");
            
            do{ counter++;
            	System.out.print(counter + ". #");
                int userPick = input.nextInt();
           
            switch(counter){
            case 1:
                if(userPick == 8){ points += 2; ansCor += 1; }
            break;
           
            case 2:
                if(userPick == 0){ points += 2; ansCor += 1; }
            break;
           
            case 3:
                if(userPick == 6){ points += 2; ansCor += 1; }
            break;
           
            case 4:
                if(userPick == 0){ points += 2; ansCor += 1; }
            break;
           
            case 5:
                if(userPick == 7){ points += 2; ansCor += 1; }
            break;
           
            case 6:
                if(userPick == 3){ points += 2; ansCor += 1; }
            break;
           
            case 7:
                if(userPick == 5){ points += 2; ansCor += 1; }
            break;
           
            case 8:
                if(userPick == 1){ points += 2; ansCor += 1; }
            break;
         }
        }while(counter < 8);
        
        } else{ System.out.println("\nYou did not enter the right choice given above.");}           
        input.close();
        
        wrong = 8 - ansCor;
        System.out.println("\nYou scored " + points + " points.");
        System.out.println("You got " + ansCor + " answers correct and " + wrong + " answers wrong.");
    }
}