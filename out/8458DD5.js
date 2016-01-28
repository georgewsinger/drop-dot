goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__391704__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__391704 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__391705__i = 0, G__391705__a = new Array(arguments.length -  0);
while (G__391705__i < G__391705__a.length) {G__391705__a[G__391705__i] = arguments[G__391705__i + 0]; ++G__391705__i;}
  args = new cljs.core.IndexedSeq(G__391705__a,0);
} 
return G__391704__delegate.call(this,args);};
G__391704.cljs$lang$maxFixedArity = 0;
G__391704.cljs$lang$applyTo = (function (arglist__391706){
var args = cljs.core.seq(arglist__391706);
return G__391704__delegate(args);
});
G__391704.cljs$core$IFn$_invoke$arity$variadic = G__391704__delegate;
return G__391704;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__391707__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__391707 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__391708__i = 0, G__391708__a = new Array(arguments.length -  0);
while (G__391708__i < G__391708__a.length) {G__391708__a[G__391708__i] = arguments[G__391708__i + 0]; ++G__391708__i;}
  args = new cljs.core.IndexedSeq(G__391708__a,0);
} 
return G__391707__delegate.call(this,args);};
G__391707.cljs$lang$maxFixedArity = 0;
G__391707.cljs$lang$applyTo = (function (arglist__391709){
var args = cljs.core.seq(arglist__391709);
return G__391707__delegate(args);
});
G__391707.cljs$core$IFn$_invoke$arity$variadic = G__391707__delegate;
return G__391707;
})()
;

return null;
});
