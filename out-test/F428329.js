goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__20968__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__20968 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20969__i = 0, G__20969__a = new Array(arguments.length -  0);
while (G__20969__i < G__20969__a.length) {G__20969__a[G__20969__i] = arguments[G__20969__i + 0]; ++G__20969__i;}
  args = new cljs.core.IndexedSeq(G__20969__a,0);
} 
return G__20968__delegate.call(this,args);};
G__20968.cljs$lang$maxFixedArity = 0;
G__20968.cljs$lang$applyTo = (function (arglist__20970){
var args = cljs.core.seq(arglist__20970);
return G__20968__delegate(args);
});
G__20968.cljs$core$IFn$_invoke$arity$variadic = G__20968__delegate;
return G__20968;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__20971__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__20971 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20972__i = 0, G__20972__a = new Array(arguments.length -  0);
while (G__20972__i < G__20972__a.length) {G__20972__a[G__20972__i] = arguments[G__20972__i + 0]; ++G__20972__i;}
  args = new cljs.core.IndexedSeq(G__20972__a,0);
} 
return G__20971__delegate.call(this,args);};
G__20971.cljs$lang$maxFixedArity = 0;
G__20971.cljs$lang$applyTo = (function (arglist__20973){
var args = cljs.core.seq(arglist__20973);
return G__20971__delegate(args);
});
G__20971.cljs$core$IFn$_invoke$arity$variadic = G__20971__delegate;
return G__20971;
})()
;

return null;
});
