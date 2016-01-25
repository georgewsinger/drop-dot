goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__10814__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__10814 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10815__i = 0, G__10815__a = new Array(arguments.length -  0);
while (G__10815__i < G__10815__a.length) {G__10815__a[G__10815__i] = arguments[G__10815__i + 0]; ++G__10815__i;}
  args = new cljs.core.IndexedSeq(G__10815__a,0);
} 
return G__10814__delegate.call(this,args);};
G__10814.cljs$lang$maxFixedArity = 0;
G__10814.cljs$lang$applyTo = (function (arglist__10816){
var args = cljs.core.seq(arglist__10816);
return G__10814__delegate(args);
});
G__10814.cljs$core$IFn$_invoke$arity$variadic = G__10814__delegate;
return G__10814;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__10817__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__10817 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__10818__i = 0, G__10818__a = new Array(arguments.length -  0);
while (G__10818__i < G__10818__a.length) {G__10818__a[G__10818__i] = arguments[G__10818__i + 0]; ++G__10818__i;}
  args = new cljs.core.IndexedSeq(G__10818__a,0);
} 
return G__10817__delegate.call(this,args);};
G__10817.cljs$lang$maxFixedArity = 0;
G__10817.cljs$lang$applyTo = (function (arglist__10819){
var args = cljs.core.seq(arglist__10819);
return G__10817__delegate(args);
});
G__10817.cljs$core$IFn$_invoke$arity$variadic = G__10817__delegate;
return G__10817;
})()
;

return null;
});
