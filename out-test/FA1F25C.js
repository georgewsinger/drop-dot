goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__62826__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__62826 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62827__i = 0, G__62827__a = new Array(arguments.length -  0);
while (G__62827__i < G__62827__a.length) {G__62827__a[G__62827__i] = arguments[G__62827__i + 0]; ++G__62827__i;}
  args = new cljs.core.IndexedSeq(G__62827__a,0);
} 
return G__62826__delegate.call(this,args);};
G__62826.cljs$lang$maxFixedArity = 0;
G__62826.cljs$lang$applyTo = (function (arglist__62828){
var args = cljs.core.seq(arglist__62828);
return G__62826__delegate(args);
});
G__62826.cljs$core$IFn$_invoke$arity$variadic = G__62826__delegate;
return G__62826;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__62829__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__62829 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__62830__i = 0, G__62830__a = new Array(arguments.length -  0);
while (G__62830__i < G__62830__a.length) {G__62830__a[G__62830__i] = arguments[G__62830__i + 0]; ++G__62830__i;}
  args = new cljs.core.IndexedSeq(G__62830__a,0);
} 
return G__62829__delegate.call(this,args);};
G__62829.cljs$lang$maxFixedArity = 0;
G__62829.cljs$lang$applyTo = (function (arglist__62831){
var args = cljs.core.seq(arglist__62831);
return G__62829__delegate(args);
});
G__62829.cljs$core$IFn$_invoke$arity$variadic = G__62829__delegate;
return G__62829;
})()
;

return null;
});
