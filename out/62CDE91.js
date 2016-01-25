goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__35184__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__35184 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35185__i = 0, G__35185__a = new Array(arguments.length -  0);
while (G__35185__i < G__35185__a.length) {G__35185__a[G__35185__i] = arguments[G__35185__i + 0]; ++G__35185__i;}
  args = new cljs.core.IndexedSeq(G__35185__a,0);
} 
return G__35184__delegate.call(this,args);};
G__35184.cljs$lang$maxFixedArity = 0;
G__35184.cljs$lang$applyTo = (function (arglist__35186){
var args = cljs.core.seq(arglist__35186);
return G__35184__delegate(args);
});
G__35184.cljs$core$IFn$_invoke$arity$variadic = G__35184__delegate;
return G__35184;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__35187__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__35187 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35188__i = 0, G__35188__a = new Array(arguments.length -  0);
while (G__35188__i < G__35188__a.length) {G__35188__a[G__35188__i] = arguments[G__35188__i + 0]; ++G__35188__i;}
  args = new cljs.core.IndexedSeq(G__35188__a,0);
} 
return G__35187__delegate.call(this,args);};
G__35187.cljs$lang$maxFixedArity = 0;
G__35187.cljs$lang$applyTo = (function (arglist__35189){
var args = cljs.core.seq(arglist__35189);
return G__35187__delegate(args);
});
G__35187.cljs$core$IFn$_invoke$arity$variadic = G__35187__delegate;
return G__35187;
})()
;

return null;
});
