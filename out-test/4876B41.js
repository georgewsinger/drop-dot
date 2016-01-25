goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__9704__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__9704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9705__i = 0, G__9705__a = new Array(arguments.length -  0);
while (G__9705__i < G__9705__a.length) {G__9705__a[G__9705__i] = arguments[G__9705__i + 0]; ++G__9705__i;}
  args = new cljs.core.IndexedSeq(G__9705__a,0);
} 
return G__9704__delegate.call(this,args);};
G__9704.cljs$lang$maxFixedArity = 0;
G__9704.cljs$lang$applyTo = (function (arglist__9706){
var args = cljs.core.seq(arglist__9706);
return G__9704__delegate(args);
});
G__9704.cljs$core$IFn$_invoke$arity$variadic = G__9704__delegate;
return G__9704;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__9707__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__9707 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__9708__i = 0, G__9708__a = new Array(arguments.length -  0);
while (G__9708__i < G__9708__a.length) {G__9708__a[G__9708__i] = arguments[G__9708__i + 0]; ++G__9708__i;}
  args = new cljs.core.IndexedSeq(G__9708__a,0);
} 
return G__9707__delegate.call(this,args);};
G__9707.cljs$lang$maxFixedArity = 0;
G__9707.cljs$lang$applyTo = (function (arglist__9709){
var args = cljs.core.seq(arglist__9709);
return G__9707__delegate(args);
});
G__9707.cljs$core$IFn$_invoke$arity$variadic = G__9707__delegate;
return G__9707;
})()
;

return null;
});
