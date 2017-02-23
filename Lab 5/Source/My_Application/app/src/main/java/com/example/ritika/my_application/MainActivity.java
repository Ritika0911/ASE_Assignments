package com.example.ritika.my_application;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.provider.MediaStore;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;

import java.io.FileNotFoundException;
import java.io.IOException;

public class MainActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {

        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

    }

    public void buttonOnClick(View w) {
        Intent redirect = new Intent(MainActivity.this, GoogleMapsActivity.class);
        startActivity(redirect);
    }

    public void buttonGallery(View w) {
        Intent redirect = new Intent(MainActivity.this, GalleryActivity.class);
        startActivity(redirect);
    }

    public void buttonPhoto(View w){
        Intent redirect = new Intent(MainActivity.this, Activity.class);
        startActivity(redirect);
    }
}