goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__13834__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__13834 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13835__i = 0, G__13835__a = new Array(arguments.length -  0);
while (G__13835__i < G__13835__a.length) {G__13835__a[G__13835__i] = arguments[G__13835__i + 0]; ++G__13835__i;}
  args = new cljs.core.IndexedSeq(G__13835__a,0);
} 
return G__13834__delegate.call(this,args);};
G__13834.cljs$lang$maxFixedArity = 0;
G__13834.cljs$lang$applyTo = (function (arglist__13836){
var args = cljs.core.seq(arglist__13836);
return G__13834__delegate(args);
});
G__13834.cljs$core$IFn$_invoke$arity$variadic = G__13834__delegate;
return G__13834;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__13837__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__13837 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__13838__i = 0, G__13838__a = new Array(arguments.length -  0);
while (G__13838__i < G__13838__a.length) {G__13838__a[G__13838__i] = arguments[G__13838__i + 0]; ++G__13838__i;}
  args = new cljs.core.IndexedSeq(G__13838__a,0);
} 
return G__13837__delegate.call(this,args);};
G__13837.cljs$lang$maxFixedArity = 0;
G__13837.cljs$lang$applyTo = (function (arglist__13839){
var args = cljs.core.seq(arglist__13839);
return G__13837__delegate(args);
});
G__13837.cljs$core$IFn$_invoke$arity$variadic = G__13837__delegate;
return G__13837;
})()
;

return null;
});
