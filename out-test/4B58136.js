goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__24701__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__24701 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24702__i = 0, G__24702__a = new Array(arguments.length -  0);
while (G__24702__i < G__24702__a.length) {G__24702__a[G__24702__i] = arguments[G__24702__i + 0]; ++G__24702__i;}
  args = new cljs.core.IndexedSeq(G__24702__a,0);
} 
return G__24701__delegate.call(this,args);};
G__24701.cljs$lang$maxFixedArity = 0;
G__24701.cljs$lang$applyTo = (function (arglist__24703){
var args = cljs.core.seq(arglist__24703);
return G__24701__delegate(args);
});
G__24701.cljs$core$IFn$_invoke$arity$variadic = G__24701__delegate;
return G__24701;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__24704__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__24704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24705__i = 0, G__24705__a = new Array(arguments.length -  0);
while (G__24705__i < G__24705__a.length) {G__24705__a[G__24705__i] = arguments[G__24705__i + 0]; ++G__24705__i;}
  args = new cljs.core.IndexedSeq(G__24705__a,0);
} 
return G__24704__delegate.call(this,args);};
G__24704.cljs$lang$maxFixedArity = 0;
G__24704.cljs$lang$applyTo = (function (arglist__24706){
var args = cljs.core.seq(arglist__24706);
return G__24704__delegate(args);
});
G__24704.cljs$core$IFn$_invoke$arity$variadic = G__24704__delegate;
return G__24704;
})()
;

return null;
});
