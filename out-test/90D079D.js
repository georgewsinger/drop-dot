goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__63968__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__63968 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63969__i = 0, G__63969__a = new Array(arguments.length -  0);
while (G__63969__i < G__63969__a.length) {G__63969__a[G__63969__i] = arguments[G__63969__i + 0]; ++G__63969__i;}
  args = new cljs.core.IndexedSeq(G__63969__a,0);
} 
return G__63968__delegate.call(this,args);};
G__63968.cljs$lang$maxFixedArity = 0;
G__63968.cljs$lang$applyTo = (function (arglist__63970){
var args = cljs.core.seq(arglist__63970);
return G__63968__delegate(args);
});
G__63968.cljs$core$IFn$_invoke$arity$variadic = G__63968__delegate;
return G__63968;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__63971__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__63971 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__63972__i = 0, G__63972__a = new Array(arguments.length -  0);
while (G__63972__i < G__63972__a.length) {G__63972__a[G__63972__i] = arguments[G__63972__i + 0]; ++G__63972__i;}
  args = new cljs.core.IndexedSeq(G__63972__a,0);
} 
return G__63971__delegate.call(this,args);};
G__63971.cljs$lang$maxFixedArity = 0;
G__63971.cljs$lang$applyTo = (function (arglist__63973){
var args = cljs.core.seq(arglist__63973);
return G__63971__delegate(args);
});
G__63971.cljs$core$IFn$_invoke$arity$variadic = G__63971__delegate;
return G__63971;
})()
;

return null;
});
