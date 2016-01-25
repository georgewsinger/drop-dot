goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__261064__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__261064 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__261065__i = 0, G__261065__a = new Array(arguments.length -  0);
while (G__261065__i < G__261065__a.length) {G__261065__a[G__261065__i] = arguments[G__261065__i + 0]; ++G__261065__i;}
  args = new cljs.core.IndexedSeq(G__261065__a,0);
} 
return G__261064__delegate.call(this,args);};
G__261064.cljs$lang$maxFixedArity = 0;
G__261064.cljs$lang$applyTo = (function (arglist__261066){
var args = cljs.core.seq(arglist__261066);
return G__261064__delegate(args);
});
G__261064.cljs$core$IFn$_invoke$arity$variadic = G__261064__delegate;
return G__261064;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__261067__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__261067 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__261068__i = 0, G__261068__a = new Array(arguments.length -  0);
while (G__261068__i < G__261068__a.length) {G__261068__a[G__261068__i] = arguments[G__261068__i + 0]; ++G__261068__i;}
  args = new cljs.core.IndexedSeq(G__261068__a,0);
} 
return G__261067__delegate.call(this,args);};
G__261067.cljs$lang$maxFixedArity = 0;
G__261067.cljs$lang$applyTo = (function (arglist__261069){
var args = cljs.core.seq(arglist__261069);
return G__261067__delegate(args);
});
G__261067.cljs$core$IFn$_invoke$arity$variadic = G__261067__delegate;
return G__261067;
})()
;

return null;
});
