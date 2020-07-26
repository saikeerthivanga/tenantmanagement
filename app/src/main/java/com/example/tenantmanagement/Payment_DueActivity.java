package com.example.tenantmanagement;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.TextView;

import com.google.android.gms.tasks.OnSuccessListener;
import com.google.firebase.auth.FirebaseAuth;
import com.google.firebase.auth.FirebaseUser;
import com.google.firebase.firestore.DocumentSnapshot;
import com.google.firebase.firestore.FirebaseFirestore;
import com.google.firebase.firestore.QuerySnapshot;

import java.util.ArrayList;
import java.util.List;

public class Payment_DueActivity extends AppCompatActivity {
    private TextView payment,due,btnpay;
    FirebaseFirestore db;
    FirebaseAuth auth;
    FirebaseUser user;

    public class Payment{
        public String dueamount;
        public String propertyname;
        Payment(String dueamount, String propertyname){
            this.dueamount = dueamount;
            this.propertyname = propertyname;
        }
    }



    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_payment__due);
        payment=findViewById(R.id.tvpayment);
        due=findViewById(R.id.tvdue);
        btnpay=findViewById(R.id.btnpay);
        auth = FirebaseAuth.getInstance();
        user = auth.getCurrentUser();

        db= FirebaseFirestore.getInstance();
        final List<Payment> paymentList = new ArrayList<>();
        db.collection("owner").get().addOnSuccessListener(new OnSuccessListener<QuerySnapshot>() {
            @Override
            public void onSuccess(QuerySnapshot queryDocumentSnapshots) {
                List<DocumentSnapshot> arr = queryDocumentSnapshots.getDocuments();
                for( DocumentSnapshot i: arr){
                    db.collection("owner").document(i.getId()).collection("properties").get().addOnSuccessListener(new OnSuccessListener<QuerySnapshot>() {
                        @Override
                        public void onSuccess(QuerySnapshot queryDocumentSnapshots) {
                            List<DocumentSnapshot> array= queryDocumentSnapshots.getDocuments();
                            for(DocumentSnapshot i: array){

                                if(user.getEmail().equals(i.get("tenentemail").toString())){
                                    Payment payment = new Payment(i.get("duepayment").toString(), i.get("propertyname").toString());
                                    paymentList.add(payment);
                                    for( Payment payment1: paymentList ){
                                        Log.i("due amount - ", payment1.dueamount);
                                        Log.i("property name - ", payment1.propertyname);
                                    }
                                }

                            }
                        }
                    });
                }
            }
        });



    }

}