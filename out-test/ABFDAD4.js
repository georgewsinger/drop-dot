goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__43536__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__43536 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43537__i = 0, G__43537__a = new Array(arguments.length -  0);
while (G__43537__i < G__43537__a.length) {G__43537__a[G__43537__i] = arguments[G__43537__i + 0]; ++G__43537__i;}
  args = new cljs.core.IndexedSeq(G__43537__a,0);
} 
return G__43536__delegate.call(this,args);};
G__43536.cljs$lang$maxFixedArity = 0;
G__43536.cljs$lang$applyTo = (function (arglist__43538){
var args = cljs.core.seq(arglist__43538);
return G__43536__delegate(args);
});
G__43536.cljs$core$IFn$_invoke$arity$variadic = G__43536__delegate;
return G__43536;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__43539__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__43539 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__43540__i = 0, G__43540__a = new Array(arguments.length -  0);
while (G__43540__i < G__43540__a.length) {G__43540__a[G__43540__i] = arguments[G__43540__i + 0]; ++G__43540__i;}
  args = new cljs.core.IndexedSeq(G__43540__a,0);
} 
return G__43539__delegate.call(this,args);};
G__43539.cljs$lang$maxFixedArity = 0;
G__43539.cljs$lang$applyTo = (function (arglist__43541){
var args = cljs.core.seq(arglist__43541);
return G__43539__delegate(args);
});
G__43539.cljs$core$IFn$_invoke$arity$variadic = G__43539__delegate;
return G__43539;
})()
;

return null;
});
