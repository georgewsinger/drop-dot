goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__53673__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__53673 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53674__i = 0, G__53674__a = new Array(arguments.length -  0);
while (G__53674__i < G__53674__a.length) {G__53674__a[G__53674__i] = arguments[G__53674__i + 0]; ++G__53674__i;}
  args = new cljs.core.IndexedSeq(G__53674__a,0);
} 
return G__53673__delegate.call(this,args);};
G__53673.cljs$lang$maxFixedArity = 0;
G__53673.cljs$lang$applyTo = (function (arglist__53675){
var args = cljs.core.seq(arglist__53675);
return G__53673__delegate(args);
});
G__53673.cljs$core$IFn$_invoke$arity$variadic = G__53673__delegate;
return G__53673;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__53676__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__53676 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53677__i = 0, G__53677__a = new Array(arguments.length -  0);
while (G__53677__i < G__53677__a.length) {G__53677__a[G__53677__i] = arguments[G__53677__i + 0]; ++G__53677__i;}
  args = new cljs.core.IndexedSeq(G__53677__a,0);
} 
return G__53676__delegate.call(this,args);};
G__53676.cljs$lang$maxFixedArity = 0;
G__53676.cljs$lang$applyTo = (function (arglist__53678){
var args = cljs.core.seq(arglist__53678);
return G__53676__delegate(args);
});
G__53676.cljs$core$IFn$_invoke$arity$variadic = G__53676__delegate;
return G__53676;
})()
;

return null;
});
