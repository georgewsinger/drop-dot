goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__242492__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__242492 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__242493__i = 0, G__242493__a = new Array(arguments.length -  0);
while (G__242493__i < G__242493__a.length) {G__242493__a[G__242493__i] = arguments[G__242493__i + 0]; ++G__242493__i;}
  args = new cljs.core.IndexedSeq(G__242493__a,0);
} 
return G__242492__delegate.call(this,args);};
G__242492.cljs$lang$maxFixedArity = 0;
G__242492.cljs$lang$applyTo = (function (arglist__242494){
var args = cljs.core.seq(arglist__242494);
return G__242492__delegate(args);
});
G__242492.cljs$core$IFn$_invoke$arity$variadic = G__242492__delegate;
return G__242492;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__242495__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__242495 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__242496__i = 0, G__242496__a = new Array(arguments.length -  0);
while (G__242496__i < G__242496__a.length) {G__242496__a[G__242496__i] = arguments[G__242496__i + 0]; ++G__242496__i;}
  args = new cljs.core.IndexedSeq(G__242496__a,0);
} 
return G__242495__delegate.call(this,args);};
G__242495.cljs$lang$maxFixedArity = 0;
G__242495.cljs$lang$applyTo = (function (arglist__242497){
var args = cljs.core.seq(arglist__242497);
return G__242495__delegate(args);
});
G__242495.cljs$core$IFn$_invoke$arity$variadic = G__242495__delegate;
return G__242495;
})()
;

return null;
});
